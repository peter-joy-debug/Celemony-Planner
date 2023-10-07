import { MultiSelect,Grid,Slider,Text,Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
export function HouseSearchForm() {
  return (
    <Grid>
        <Grid.Col span={4}>    
    <MultiSelect
      label="House type"
      placeholder="Pick value"
      data={['Villa', 'Mansion', 'Palace', 'Konosho']}
    //   defaultValue={['Villa']}
      clearable
      searchable
    />
    </Grid.Col>
    <Grid.Col span={4}>
    <MultiSelect
      label="House Location"
      placeholder="Pick value"
      data={['Kigali', 'Bugesera', 'Kamembe', 'Kabeza','Gisozi','Rubavu']}
    //   defaultValue={['Kigali']}
      clearable
      searchable
    />
        </Grid.Col>
        <Grid.Col span={4}>
    <MultiSelect
      label="House Status"
      placeholder="Pick value"
      data={['Furnished', 'Semi-Furnished', 'Unfurnished', 'Under Construction']}
      defaultValue={['Furnished']}
      clearable
      searchable
    />
        </Grid.Col>

        <Grid.Col span={4}>
        <MultiSelect
      label="Trade Mode"
      placeholder="Pick value"
      data={['Sales', 'Rent']}
    //   defaultValue={['Sales']}
      clearable
      searchable
    />
        </Grid.Col>

        <Grid.Col span={4}>
        <Text size="sm">Price Range</Text>
        <Slider marks={[ { value: 7000000, label: '7,000,000 RWF' }]} labelAlwaysOn />
        </Grid.Col>

        <Grid.Col span={4}>
        <Button icon={<IconArrowRight size={14} />} fullWidth>Search house  <IconArrowRight size={14} /></Button>
        </Grid.Col>

       

       
    </Grid>

  );
}