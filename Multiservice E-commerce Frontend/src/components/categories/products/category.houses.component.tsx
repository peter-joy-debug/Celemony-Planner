import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Tabs } from '@mantine/core';


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
}

function Cards({ image, title, category }: CardProps) {
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
      <Text className={classes.category} size="xs">
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
    <Button variant="white" color="dark">
      View more
    </Button>
      </Paper>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Villa Houses, Kigali',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Residential Ascot, Kigali',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Family Houses, Canada',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Country Side, Rwanda',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Mansion Houses',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Royal Houses, Paris',
    category: 'nature',
  },
];

export function CategoryHousesComponent({ activeTab }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Cards {...item} />
    </Carousel.Slide>
  ));
  const [isCarouselPaused, setIsCarouselPaused] = useState(activeTab !== 'first');
  
  useEffect(() => {
    setIsCarouselPaused(activeTab !== 'first');
  }, [activeTab]);

  return (

      <Carousel
      slideSize="33.3%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      classNames={{controls: classes.controls,}}
      className={classes.carouselSection}
      slidesToScroll={mobile ? 1 : 2}
      paused={isCarouselPaused}
    >
        
      {slides}


    </Carousel>



  

  );
}