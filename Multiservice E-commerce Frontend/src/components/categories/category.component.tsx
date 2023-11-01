import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Tabs } from '@mantine/core';
import {CategoryHousesComponent} from './products/category.houses.component';
import {CategoryVehiclesComponent} from './products/category.vehicles.component';


const useStyles = createStyles((theme) => ({


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

}));

export function CategoryComponent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState('first');

  const handleTabChange = (tabValue) => {
    console.log(tabValue);
    setActiveTab(tabValue);
  };

const tabValues = ["first", "second", "third", "fourth"];
  return (
    <Container size="xl" shadow="xl" p="md" withBorder style={{marginTop:'-10px'}}>
    <Title order={3} className={classes.titles} style={{color:'black'}}>
       Top Bookings
    </Title>
    <br></br>
    <br></br>

    <Tabs color="gray" defaultValue="first" onChange={handleTabChange} variant="pills">
  <Tabs.List>
    <Tabs.Tab value="first" >Houses</Tabs.Tab>
    <Tabs.Tab value="second" color="gray" >
      Vehicles
    </Tabs.Tab>
    <Tabs.Tab value="third" color="cyan" >
      Electronics
    </Tabs.Tab>
    <Tabs.Tab value="fourth" color="orange" >
      Furnitures
    </Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="first" pt="xs">
    <br></br>
    <CategoryHousesComponent activeTab={activeTab} />
  </Tabs.Panel>

  <Tabs.Panel value="second" pt="xs">
    <br></br>
    <CategoryVehiclesComponent activeTab={activeTab} />
  </Tabs.Panel>

  <Tabs.Panel value="third" pt="xs">
    Second tab color is blue, it gets this value from props, props have the priority and will override context value
  </Tabs.Panel>

  <Tabs.Panel value="fourth" pt="xs">
    Second tab color is blue, it gets this value from props, props have the priority and will override context value
  </Tabs.Panel>
</Tabs>





    <br></br>
    <br></br>
    <br></br>
    <br></br>


    </Container>


  

  );
}