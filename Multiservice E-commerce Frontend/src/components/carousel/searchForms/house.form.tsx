import { MultiSelect,Grid,Slider,Text,Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mantine/hooks';
export function HouseSearchForm() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Define a media query for small screens
  const isSmallScreenQuery = useMediaQuery('(max-width: 600px)');

  // Update the state based on the media query result
  useEffect(() => {
    setIsSmallScreen(isSmallScreenQuery);
  }, [isSmallScreenQuery]);


  const gridSpan = isSmallScreen ? 12 : 4;
  const gridSpan_800 = isSmallScreen ? 6 : 4;
  // const paperWidth = isSmallScreen ? 96 : 40;
  // const paperMarginLeft = isSmallScreen ? 0 : 12.1;
  // const paperMarginBottom = isSmallScreen ? 200 : 0;
  return (
    <Grid>
          
        <Grid.Col span={gridSpan}>    
    <MultiSelect
      label="House type"
      placeholder="Pick value"
      data={['Villa', 'Mansion', 'Palace', 'Konosho']}
    //   defaultValue={['Villa']}
      clearable
      searchable
    />
    </Grid.Col>
    
     
    <Grid.Col span={gridSpan}>
    <MultiSelect
      label="House Location"
      placeholder="Pick value"
      data={['Kigali', 'Bugesera', 'Kamembe', 'Kabeza','Gisozi','Rubavu']}
    //   defaultValue={['Kigali']}
      clearable
      searchable
    />
        </Grid.Col>




        <Grid.Col span={gridSpan}>
    <MultiSelect
      style={{width:'100%'}}
      label="House Status"
      placeholder="Pick value"
      data={['Furnished', 'Semi-Furnished', 'Unfurnished', 'Under Construction']}
      defaultValue={['Furnished']}
      clearable
      searchable
    />
        </Grid.Col>



        <Grid.Col span={gridSpan}>
        <MultiSelect
      label="Trade Mode"
      placeholder="Pick value"
      data={['Sales', 'Rent']}
    //   defaultValue={['Sales']}
      clearable
      searchable
    />
        </Grid.Col>

        <Grid.Col span={gridSpan}>
        <Text size="sm">Price Range</Text>
        <Slider marks={[ { value: 7000000, label: '7,000,000 RWF' }]} labelAlwaysOn />
        </Grid.Col>

        <Grid.Col span={4}>
        <Button icon={<IconArrowRight size={14} />} fullWidth>Search house  <IconArrowRight size={14} /></Button>
        </Grid.Col>
    
       

       
    </Grid>

  );
}