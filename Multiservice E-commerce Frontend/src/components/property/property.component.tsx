import { Grid, createStyles, SegmentedControl, rem,useMantineTheme, Container, Text, Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings,IconHome2,IconCar,IconDevices,IconSofa } from '@tabler/icons-react';
import { useState } from 'react';
import { getDataForTab } from '../../data/propertyData/propertyTabData';
import {PlaceCard} from '../cards/place.card';
import {HouseProperty} from './properties/houses.property';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  indicator: {
    backgroundImage: theme.fn.gradient({ from: '#332D2D', to: '#332D2D' }),
  },

  control: {
    border: '0 !important',
  },

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
}));

export function Property({ language, onLanguageChange }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState('All');
  const iconStyle = { width: rem(25), height: rem(25) };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


    const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
    };


  const tabData = ['All', 'AI/ML', 'C++', 'Rust', 'TypeScript'];
  return (

<Container size="xl" style={{marginTop:'-7%'}}>
  <br></br>
<Text size="xs" 
my="md"
    style={{    
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(30),
    color:'black',
    marginTop: theme.spacing.xs,}}>
          Our products
          <br></br>
      </Text>

      <Tabs defaultValue="gallery" placement="center" variant="pills" radius="md">
        <center>
      <Tabs.List justify="center" position="center" radius="md">
        <Tabs.Tab value="gallery" style={{textAlign:'center'}}>

        <IconHome2 style={iconStyle} /> <br></br>
        Houses
        </Tabs.Tab>
        <Tabs.Tab value="messages" style={{textAlign:'center'}}>
        <IconCar style={iconStyle} /> <br></br>Vehicles
        </Tabs.Tab>
        <Tabs.Tab value="settings" style={{textAlign:'center'}}>
        <IconDevices style={iconStyle} /><br></br> Electronics
        </Tabs.Tab>
        <Tabs.Tab value="settings" style={{textAlign:'center'}}>
        <IconSofa style={iconStyle} /> <br></br> Furnitures
        </Tabs.Tab>
      </Tabs.List>
      </center>
      {/* <hr style={{width:'50%'}}></hr> */}

      <Tabs.Panel value="gallery">
      <HouseProperty language={language} onLanguageChange={handleLanguageChange}/>
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>



    </Container>
  );
}