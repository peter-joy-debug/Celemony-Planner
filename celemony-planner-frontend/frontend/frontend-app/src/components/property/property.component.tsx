import { Grid, createStyles, SegmentedControl, rem,useMantineTheme, Container, Text } from '@mantine/core';
import { useState } from 'react';
import { getDataForTab } from '../../data/propertyData/propertyTabData';
import {PlaceCard} from '../cards/place.card';

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


    const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
    };


  const tabData = ['All', 'AI/ML', 'C++', 'Rust', 'TypeScript'];
  return (

<Container size="xl" >
  <br></br>
<Text size="xs" 
my="md"
    style={{    
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(30),
    // borderRadius:'50px',
    // borderTopRightRadius:'200px',
    // width:'80%',
    // padding:'20px 20px',
    // backgroundColor:'white',
    // border:'1px solid hsl(206.6, 89.7%, 54.1%)',
    // boxShadow: '1px 2px 50px rgba(0,0,0,0.7)',
    color:'black',
    marginTop: theme.spacing.xs,}}>
          Our products
          <br></br>
      </Text>
<Container my="md" style={{ textAlign: 'center' }} size="xl">

      <SegmentedControl
        radius="xl"
        size="md"
        data={['All', 'AI/ML', 'C++', 'Rust', 'TypeScript']}
        classNames={classes}
        value={activeTab}
        onChange={handleTabChange}
      />
      <br></br>
      <br></br>
      <Grid>
      <Grid.Col xs={12}>
      <Grid>
      {getDataForTab(activeTab, language).slice(0, 8).map((item) => (
        <Grid.Col xs={3}>
            <PlaceCard title={item.title[language]} description={item.description[language]} />
        </Grid.Col>
        ))}

      </Grid>
      </Grid.Col>
      </Grid>
    </Container>
    </Container>
  );
}