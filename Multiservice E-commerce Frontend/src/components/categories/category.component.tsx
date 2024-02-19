import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Tabs,Group } from '@mantine/core';
import {CategoryHousesComponent} from './products/category.houses.component';



const data = [
  {
    image:
      'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/398479548_914509350252683_4401284482050289368_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHCPlAheRYcPYocLRgG-BlWweq_ZFd6dvjB6r9kV3p2-EoyGBDESnGP5p08afqsMs10UGk-GgmZO4ObVZK0A7k7&_nc_ohc=p5QwtywuiM8AX8psbym&_nc_ht=scontent.fkgl4-1.fna&oh=00_AfC9KfslE1bwJ6FVuaJA1d5eSQcmEkTfdDCXelC8RrQbEA&oe=65D8ED51',
    location:'Kigali',
    title: 'Romantic garden',
    category: 'Wedding Facility',
    type: 'house',
  },
  {
    image:
      'https://crystaleventsrw.files.wordpress.com/2015/07/elegant-style-of-wedding-reception-ideas.jpg',
    location:'Kigali',
    title: 'Crystal Event',
    category: 'Wedding Facility',
    type: 'house',
  },
  {
    image:
      'https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-ballroom-0028-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2882px:*',
    location:'Kigali',
    title: 'Marriot Hotel',
    category: 'Wedding Facility',
    type: 'house',
  },
  {
    image:
      'https://images.unsplash.com/photo-1622551997608-400d763b0f64?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location:'Kigali',
    title: 'Raynord Camp',
    category: 'Benz',
    type:'vehicle',
  },
  {
    image:
      'https://easyride.rw/wp-content/uploads/2023/05/Range-rover-wedding-car-1024x614.jpg',
    location:'Kigali',
    title: 'Kigali Motor',
    category: 'Range Rover',
    type:'vehicle',
  },
  {
    image:
      'https://callaride.co.ke/wp-content/uploads/2023/06/wedding-car-hire-4.jpg.webp',
    location:'Kigali',
    title: 'Akagera Motor',
    category: 'All collection',
    type:'vehicle',
  },
  {
    image:
      'https://danddclothing.com/cdn/shop/articles/Rwandan_Traditional_Wedding_Styles.jpg?v=1621600071',
    location:'Kigali',
    title: 'D&D Clothes',
    category: 'Clothes',
    type:'electronic',
  },
  {
    image:
      'https://i.pinimg.com/736x/19/67/0a/19670a1bd1113d6879b33b93d9e13b5b.jpg',
    location:'Kigali',
    title: 'Ambara Fashion',
    category: 'Clothes',
    type:'electronic',
  },
  {
    image:
      'https://fivetofivehotel.com/wp-content/uploads/2018/03/restora-1-1-2.jpg',
    location:'Kigali',
    title: 'Five To Five Hotel',
    category: 'Buffet',
    type:'kitchen',
  },
  {
    image:
      'https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2017/09/23/1506199098galos.jpg',
    location:'Kigali',
    title: 'Shine Photo',
    category: 'Photograph',
    type:'photograph',
  },
  {
    image:
      'https://cdn.valueimagery.com/wp-content/uploads/2022/01/photography-1.jpg',
    location:'Kigali',
    title: 'M-Jere Photo',
    category: 'Photograph',
    type:'photograph',
  },
  {
    image:
      'https://afrikalyrics.com/assets/artistes/mc-tino.jpg',
    location:'Kigali',
    title: 'MC Tan',
    category: 'MC',
    type:'mc',
  },
  {
    image:
      'https://i.ytimg.com/vi/GFZlEZyezzs/maxresdefault.jpg',
    location:'Kigali',
    title: 'Uruyange',
    category: 'Traditional Dancers',
    type:'dancer',
  },
  {
    image:
      'https://i0.wp.com/africans-in-america.com/wp-content/uploads/2022/02/0f140-inganzo-ngari.jpg?fit=873%2C491&ssl=1',
    location:'Kigali',
    title: 'Inyamibwa',
    category: 'Traditional Dancers',
    type:'dancer',
  },
  {
    image:
      'https://avalliance.com/wp-content/uploads/2020/11/Rwanda-Events-logo-960x540-1.jpg',
    location:'Kigali',
    title: 'Rwanda Events',
    category: 'Sound',
    type:'sound',
  },
  {
    image:
      'https://inyarwanda.com/app/webroot/img/202308/images/rrr-696071691009268-6511351692199591.jpg',
    location:'Kigali',
    title: 'Josh Ishimwe',
    category: 'Singer',
    type:'singer',
  },
  {
    image:
      'https://www.newtimes.co.rw/uploads/imported_images/files/2018/neptunez-band_0.jpg',
    location:'Kigali',
    title: 'Kigali Jazz (KJJ)',
    category: 'Singer',
    type:'singer',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Umutahira.jpg',
    location:'Kigali',
    title: 'Mugabo Steven',
    category: 'Umutahira',
    type:'umutahira',
  },
  
];


const categories = [
  { name: 'Places', value: 'house' },
  { name: 'Vehicles', value: 'vehicle' },
  { name: 'Clothes / Decoration', value: 'electronic' },
  { name: 'Kitchen', value: 'kitchen' },
  { name: 'Photographer', value: 'photograph' },
  { name: 'MCs', value: 'mc' },
  { name: 'Dancers', value: 'dancer' },
  { name: 'Sonolization', value: 'sound' },
  { name: 'Singers', value: 'singer' },
  { name: 'Umutahira', value: 'umutahira' },
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
       Top Bookings
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
      {activeCategory === 'kitchen' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'photograph' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'mc' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'dancer' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'sound' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'singer' && <CategoryHousesComponent data={filteredData} />}
      {activeCategory === 'umutahira' && <CategoryHousesComponent data={filteredData} />}
      {/* Add components for other categories as needed */}



    <br></br>
    <br></br>
    <br></br>
    <br></br>


    </Container>


  

  );
}