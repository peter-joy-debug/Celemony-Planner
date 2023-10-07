import { Grid,Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem,Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import cover from '../../assets/4.jpg';
import useStyles from './HeroBullets.module.tsx';
import {SearchCarousel} from './search.carousel';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';

export function HeroWelcomeComponent() {
    const { classes, theme } = useStyles();
    // Initialize screen size state with the default value
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Define a media query for small screens
  const isSmallScreenQuery = useMediaQuery('(max-width: 600px)');

  // Update the state based on the media query result
  useEffect(() => {
    setIsSmallScreen(isSmallScreenQuery);
  }, [isSmallScreenQuery]);
  const colSpan = isSmallScreen ? 12 : 6;
  const paperWidth = isSmallScreen ? 96 : 40;
  const paperMarginLeft = isSmallScreen ? 0 : 12.1;
  const paperMarginBottom = isSmallScreen ? 200 : 0;
  return (
    <Container size="xl" style={{marginBottom:`${paperMarginBottom}px`,}}>
            <Grid>
      <Grid.Col span={colSpan}>
      <div >
          <Title >
            Live<span className={classes.highlight}>Dealer</span>
          </Title>
          <Text c="dimmed" mt="47px">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable.
          </Text>

          <Paper shadow="xl"  
          style={{
                    position: 'absolute',
                    zIndex: 1, // Set a higher z-index than the image
                    padding: '10px', // Add your desired padding
                    width: `${paperWidth}%`,
                    marginTop:'-16px',
                    marginLeft:`${paperMarginLeft}%`,
                    
                  }}>
          {/* {paperWidth}, {paperMarginLeft} */}
          <SearchCarousel/>
          </Paper>
          {/* <Group mt={30} style={{marginTop:'200px'}}>
            <Button radius="xl" size="md" >
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" >
              Source code
            </Button>
          </Group> */}
        </div>
      </Grid.Col>
      {!isSmallScreen && (
      <Grid.Col span={6} style={{marginTop:'3%'}}>
        <Paper shadow="xl">
            <Image
              style={{}}
              src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688501.jpg?w=1380&t=st=1696685842~exp=1696686442~hmac=c8c455088ffb1a6962943f57dc4af487b63ee946457c1729950b32e39da6a9e2"
              className={classes.image}
            />
         </Paper>
      </Grid.Col>
      )}
    </Grid>
     
    </Container>
  );
}