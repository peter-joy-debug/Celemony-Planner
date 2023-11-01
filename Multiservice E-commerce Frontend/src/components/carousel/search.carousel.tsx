import {  
    Container,
    Grid,
    Select,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    createStyles,
    Image,
    Card,
    Tabs,
    Text,
    TextInput,
    Group,
    Button,
    getStylesRef,
    rem,
    Navbar,
    ScrollArea,
    Code,
    UnstyledButton,
    Checkbox, } from '@mantine/core';
    import { DatePickerInput } from '@mantine/dates';
    import React, { useState } from 'react';
    import {HouseSearchForm} from './searchForms/house.form';
    

    const useStyles = createStyles((theme) => ({
      root: {
        position: 'relative',
      },
    
      input: {
        height: rem(54),
        paddingTop: rem(18),
      },
    
      label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
      },
    }));
import { IconPhoto, IconMessageCircle, IconSettings,IconHome2,IconCar,IconDevices,IconSofa } from '@tabler/icons-react';

export function SearchCarousel() {

  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState(null);
  const toggleTab = (tabValue) => {
    setActiveTab((prevTab) => (prevTab === tabValue ? null : tabValue));
  };

  return (

    <Tabs variant="pills" placement="center" radius="sm" defaultValue="gallery">

    <Tabs.List style={{backgroundColor:'rgba(0,0,0,0.02)', borderRadius:'0px'}} position="center">
      <Tabs.Tab value="gallery" shadow="xl" icon={<IconHome2 size="2rem" />} onClick={() => toggleTab('gallery')}>Houses</Tabs.Tab>
      <Tabs.Tab value="messages" icon={<IconCar size="2rem" />} onClick={() => toggleTab('messages')}>Vehicles</Tabs.Tab>
      <Tabs.Tab value="settings" icon={<IconDevices size="2rem" />} onClick={() => toggleTab('settings')}>Electronics</Tabs.Tab>
      <Tabs.Tab value="photo" icon={<IconSofa size="2rem" />} onClick={() => toggleTab('photo')}>Furnitures </Tabs.Tab>
    </Tabs.List>
    
        <Tabs.Panel value="gallery" pt="xs" >
        <HouseSearchForm/>

        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs" >
        Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs" >
        Settings tab content
        </Tabs.Panel>

        <Tabs.Panel value="photo" pt="xs" >
        Photographers tab content
        </Tabs.Panel>
        </Tabs>

  );
}

{/* <Tabs.Panel value="messages" pt="xs" hidden={activeTab !== 'messages'}>
Messages tab content
</Tabs.Panel> */}