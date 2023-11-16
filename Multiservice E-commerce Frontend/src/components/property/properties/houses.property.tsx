import { Grid, createStyles, SegmentedControl, rem,useMantineTheme, Container, Text, Tabs } from '@mantine/core';
// import { IconPhoto, IconMessageCircle, IconSettings,IconHome2,IconCar,IconDevices,IconSofa } from '@tabler/icons-react';
import { useState } from 'react';
import { getHousePropertyData } from '../../../data/propertyData/propertyTabData';
import {PlaceCard} from '../../cards/place.card';

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

export function HouseProperty({ language, onLanguageChange }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState('Villa');
  const iconStyle = { width: rem(25), height: rem(25) };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


    const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
    };


  const tabData = ['Villa', 'Residential', 'Family', 'Country side', 'Mansion', 'Royal'];
  return (

<Container size="xl">
  <br></br> 
      <Container my="md"  size="xl">
      <SegmentedControl
        radius="md"
        color="gray"
        data={tabData}
        classNames={classes}
        value={activeTab}
        onChange={handleTabChange}
      />
      <br></br>
      <br></br>
      <Grid>
      <Grid.Col xs={12}>
      <Grid>
      {getHousePropertyData(activeTab, language).slice(0, 8).map((item) => (
        <Grid.Col xs={3}>
            <PlaceCard productId={item.id} title={item.title[language]} description={item.description[language]} mode={item.mode[language]} rate={item.rate} status={item.status[language]} location={item.location} price={item.price} currency={item.currency} dealer={item.dealer} post_date={item.post_date} card_image={item.card_image} language={language} activeTab={activeTab}/>
        </Grid.Col>
        ))}

      </Grid>
      </Grid.Col>
      </Grid>
      </Container>



    </Container>
  );
}