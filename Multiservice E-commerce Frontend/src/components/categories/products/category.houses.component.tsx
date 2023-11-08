import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Tabs } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  card: {
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(20),
    marginTop: theme.spacing.xs,
  },

  titles: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  controls: {
    color: 'green',
    fontSize: rem(24),
    position: 'absolute',
    marginTop:rem(-20),
    marginLeft:'80%',
    width:'20%',
    float:'right',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    // justifyContent: 'space-between',
    padding: rem(7),
    zIndex: 2,
    background: '#332D2D',
    borderRadius:'20px',
    fontSize:'40px',
    boxShadow: '1px 2px 80px rgba(0,0,0,0.2)',

  },
  carouselSection:
  {
    backgroundColor:'rgba(255,255,255,0.1)',
    padding:'50px 40px 40px 40px',
    // marginTop:rem(-55),
    boxShadow: '1px 2px 50px rgba(0,0,0,0.5)',
  },
  Overlay:
  {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    marginBottom:'-30px',
    marginLeft:'-24px',
    marginRight:'60px',
    background: 'rgba(0, 0, 0, 0.3)', /* Adjust the alpha value to control the brightness level */
    filter: 'brightness(1)', /* Adjust the brightness value as needed */
    zIndex: 1,
  }
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  type:string;
}

function Cards({ image, title, category, type }: CardProps) {
  const { classes } = useStyles();

  return (


    <Paper
      shadow="xl"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})`,
    }}
      className={classes.card}
      
    >
      <Text className={classes.category} size="xs" style={{backgroundColor:'rgba(0,0,0,0.8)',padding:'2%', color:'#fff',borderRadius:'20px'}}>
        {category}
      </Text>
     
      <Paper       
      shadow="xl"
      p="xl"
      radius="md" 
      className={classes.Overlay} 
      >
      <div>
      <br></br>
      <Title order={3} className={classes.title} style={{color:'white'}}>
        {title}
      </Title>
   </div>
   <br></br>
   <Button
        variant="filled"
        color="rgba(255, 255, 255, 1)"
      >
        View more <IconArrowRight size={14} />
      </Button>
      </Paper>
    </Paper>
  );
}

export function CategoryHousesComponent({data}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Cards {...item} />
    </Carousel.Slide>
  ));


  return (

      <Carousel
      slideSize="33.3%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      classNames={{controls: classes.controls,}}
      className={classes.carouselSection}
      slidesToScroll={mobile ? 1 : 2}
    >
        
      {slides}


    </Carousel>



  

  );
}