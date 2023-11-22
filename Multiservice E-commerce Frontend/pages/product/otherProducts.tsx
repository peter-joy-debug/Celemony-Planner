import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Tabs } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
import { getHousePropertyData } from '../../src/data/propertyData/propertyTabData';
import {PlaceCard} from '../../src/components/cards/place.card';


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
    backgroundColor:'rgba(0,0,0,0.03)',
    padding:'50px 40px 40px 40px',
    // marginTop:rem(-55),
    // boxShadow: '1px 2px 10px rgba(0,0,0,0.09)',
    borderRadius:'20px',

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

export function SimilarProducts({activeTab, language}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const propertyData = getHousePropertyData(activeTab, language);
//   console.log("Lang New ",language);
//   console.log("Acti New ",activeTab);
//   console.log("Data: ",propertyData);
  const { classes } = useStyles();


  return (

      <Carousel
      slideSize="27%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      classNames={{controls: classes.controls,}}
      className={classes.carouselSection}
      slidesToScroll={mobile ? 1 : 2}
    >

{propertyData.slice(0, 8).map((item) => (
      <Carousel.Slide key={item.title}>

        <PlaceCard
          productId={item.id}
          title={item.title[language]}
          description={item.description[language]}
          mode={item.mode[language]}
          rate={item.rate}
          status={item.status[language]}
          location={item.location}
          price={item.price}
          currency={item.currency}
          dealer={item.dealer}
          post_date={item.post_date}
          card_image={item.card_image}
          language={language}
          activeTab={activeTab}
        />
      </Carousel.Slide>
    ))}


    </Carousel>



  

  );
}