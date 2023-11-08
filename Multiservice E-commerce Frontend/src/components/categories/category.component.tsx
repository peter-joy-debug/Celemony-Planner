import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Tabs,Group } from '@mantine/core';
import {CategoryHousesComponent} from './products/category.houses.component';



const data = [
  {
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Villa Houses, Kigali',
    category: 'Villa',
    type: 'house',
  },
  {
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Residential Ascot, Kigali',
    category: 'Residential',
    type: 'house',
  },
  {
    image:
      'https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Family Houses, Canada',
    category: 'Family',
    type: 'house',
  },
  {
    image:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Country Side, Rwanda',
    category: 'Country Side',
    type: 'house',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Mansion Houses',
    category: 'Mansion',
    type: 'house',
  },
  {
    image:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Royal Houses, Paris',
    category: 'Royal',
    type: 'house',
  },

  {
    image:
      'https://images.unsplash.com/photo-1622551997608-400d763b0f64?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mercedes Benz, Kigali',
    category: 'Benz',
    type:'vehicle',
  },
  {
    image:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Range Rover, Kigali',
    category: 'Range Rover',
    type:'vehicle',
  },
  {
    image:
      'https://images.unsplash.com/photo-1633235144504-82c905bdd66d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    title: 'Toyota Cars, Rwanda',
    category: 'Toyota',
    type:'vehicle',
  },
  {
    image:
      'https://s7g10.scene7.com/is/image/hyundaiautoever/PDPE_HB_TopTrim_DG01-02_EXT_front_lights-on_rgb_v01_w5c_CL:16x9?wid=1920&hei=1080&fit=wrap,1',
    title: 'Hyndai Cars, Rwanda',
    category: 'Hyndai',
    type:'vehicle',
  },
  {
    image:
      'https://cars.usnews.com/static/images/Auto/izmo/i92367448/2019_cadillac_escalade_frontview.jpg',
    title: 'Cadillac Escalade, Kigali',
    category: 'Cadillac',
    type:'vehicle',
  },
  {
    image:
      'https://i.pinimg.com/originals/77/eb/91/77eb91c9fd0e8a95ba73c1a898a552a6.png',
    title: 'volkswagen, Germany',
    category: 'Volkswagen',
    type:'vehicle',
  },


  {
    image:
      'https://images.unsplash.com/photo-1552857131-0afaed1953f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Laptops, Kigali',
    category: 'Laptop',
    type:'electronic',
  },
  {
    image:
      'https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Desktop, Kigali',
    category: 'Desktop',
    type:'electronic',
  },
  {
    image:
      'https://images.unsplash.com/photo-1650580809796-39361e4d77f6?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Smartphones, Rwanda',
    category: 'Smartphone',
    type:'electronic',
  },
  {
    image:
      'https://images.unsplash.com/photo-1698729617018-7475086abd54?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Smartwatches, Rwanda',
    category: 'Smartwatches',
    type:'electronic',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Speakers, London',
    category: 'Speakers',
    type:'electronic',
  },
  {
    image:
      'https://images.unsplash.com/photo-1643208589884-1aa3a8a67b67?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Flat TVs, Germany',
    category: 'TVs',
    type:'electronic',
  },


  {
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Hofa, Kigali',
    category: 'Hofa',
    type:'furniture',
  },
  {
    image:
      'https://images.unsplash.com/photo-1573104049264-5324ea0027d5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Tables, Kigali',
    category: 'Table',
    type:'furniture',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Beds, Rwanda',
    category: 'Bed',
    type:'furniture',
  },
  {
    image:
      'https://images.unsplash.com/photo-1595515106864-077d30192c56?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Cupboard, Rwanda',
    category: 'Cupboard',
    type:'furniture',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Best Curpet, China',
    category: 'Curpet',
    type:'furniture',
  },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1643208589884-1aa3a8a67b67?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   title: 'Flat TVs, Germany',
  //   category: 'TVs',
  //   type:'electronic',
  // },
];


const categories = [
  { name: 'Houses', value: 'house' },
  { name: 'Vehicles', value: 'vehicle' },
  { name: 'Electronics', value: 'electronic' },
  { name: 'Furnitures', value: 'furniture' },
];

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
  const [activeCategory, setActiveCategory] = useState('house');
  const filteredData = data.filter((item) => item.type === activeCategory);



const tabValues = ["first", "second", "third", "fourth"];
  return (
    <Container size="xl" shadow="xl" p="md" withBorder style={{marginTop:'-10px'}}>
    <Title order={3} className={classes.titles} style={{color:'black'}}>
       Top Categories
    </Title>
    <br></br>
        <div>
        <Group justify="center">
        {categories.map((category) => (
          <Button
            key={category.value}
            size="xs"
            color="gray"
            onClick={() => setActiveCategory(category.value)}
            variant={activeCategory === category.value ? 'filled' : 'outline'}
          >
            {category.name}
          </Button>
        ))}
      </Group>
      </div>
      <br></br>
      <br></br>
      {activeCategory === 'house' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'vehicle' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'electronic' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'furniture' && <CategoryHousesComponent data={filteredData} />}
      {/* Add components for other categories as needed */}



    <br></br>
    <br></br>
    <br></br>
    <br></br>


    </Container>


  

  );
}