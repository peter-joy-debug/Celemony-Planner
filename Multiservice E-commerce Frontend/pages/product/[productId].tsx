import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getHousePropertyData } from '../../src/data/propertyData/propertyTabData';
import { Card, Text, Image, Grid, SimpleGrid, Skeleton,Container, rem, Group, Button, Title, Badge,Tabs,Spoiler, Paper } from '@mantine/core'; // Import only the necessary Mantine components
import CryptoJS from 'crypto-js';
import { IconHeart, IconHeartFilled,IconMapPinFilled,IconUsers,IconStarFilled,IconPhotoPlus,IconShare2,IconBed, IconBath, IconDoor, IconBaselineDensitySmall, IconStar,IconMapPin, Icon360View } from '@tabler/icons-react';
import {SimilarProducts} from './otherProducts';
import ImageGrid from './imageGrid';

const PRIMARY_COL_HEIGHT = rem(400);



const ProductDetails = () => {
  const SECONDARY_COL_HEIGHT = rem(192);
  const router = useRouter();
  const { productId, enc } = router.query;
  const [product, setProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('house');
  // const filteredData = data.filter((item) => item.type === activeCategory);
  const [language, setLanguage] = useState(''); // Initialize language state
  const [activeTab, setActiveTab] = useState(''); // Initialize language state
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!enc) {
      return;
    }

    try {
      // Decrypt parameters
      const decryptedParams = CryptoJS.AES.decrypt(decodeURIComponent(enc), 'peterjoy_').toString(CryptoJS.enc.Utf8) || '{}';
      const decryptedParamsObject = JSON.parse(decryptedParams);

      // Destructure language and activeTab from decryptedParamsObject
      const { language: decryptedLanguage, activeTab: decryptedTab } = decryptedParamsObject;
      console.log("Language Decrypted: ",decryptedLanguage);
      console.log("Tab: ",decryptedTab);
      // Set the language state
      setLanguage(decryptedLanguage);
      setActiveTab(decryptedTab);

      // Fetch product data based on the active tab and language
      const productsData = getHousePropertyData(decryptedTab, decryptedLanguage);

      // Find the product in the array with the matching ID
      const selectedProduct = productsData.find((item) => String(item.id) === productId);

      // Set the product in the state
      setProduct(selectedProduct);
    } catch (error) {
      console.error('Error parsing or decrypting parameters:', error);
    }
  }, [productId, enc]);

  if (!product) {
    return <p>Loading...</p>; // Handle loading state or redirect
  }

  // Destructure properties from the product object
  const { title, description, mode, rate, price, currency,status, location, dealer, post_date, card_image, images, amenities, design_info, reviews } = product;
  const { guests, beds, bath, dinning } = design_info[0];

  return (
    <Container size="xl">
      <Text color="dimmed">Home / Products / House / {title[language]}</Text>
      <Title order={2} style={{marginBottom:'10px', marginTop:'10px'}}>{title[language]}</Title>
        
        <Group gap="xs">
        <Badge color="gray" style={{fontSize:'15px'}}>
        <Text weight="400"> <IconStarFilled size={15}/> <IconStarFilled size={15}/> <IconStarFilled size={15}/> <IconStarFilled size={15}/> {rate} </ Text>
        </Badge>
        <Badge color="gray" style={{textTransform:'capitalize',fontSize:'15px'}}>
        <Text weight="400"> 512 Reviews </ Text>
        </Badge>
        <Badge color="gray" style={{textTransform:'capitalize',fontSize:'15px'}}>
        <Text weight="400"><IconMapPinFilled size={16}/> {location[language]} </ Text>
        </Badge>

        <Group gap="xl" justify="flex-end" grow>
          <Button> Share &nbsp; <IconShare2 size={16}/></Button>
          {/* <Button style={{top:'400px', marginLeft:'140px', zIndex:1}}>View More &nbsp;<IconPhotoPlus size={16}/> </Button> */}
        </Group>
        </Group>



        {/* <Grid style={{marginTop:'10px'}}>
          <Grid.Col span={6}>
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
                <Grid gutter="md">
                <Grid.Col>
                  <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                </Grid.Col>
              </Grid>
          </Grid.Col>
        </Grid> */}

    <ImageGrid images={images} />



        {/* Other Description */}

        <Grid style={{marginTop:'10px',marginBottom:'40px'}}>
          <Grid.Col span={12}>
          <Text weight="450" size="xl"> Things to know </ Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Paper>
            <Text weight="350">{description[language]} </ Text>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
          <Paper shadow="sm" pt="sm" mt="sm" style={{padding:'3%'}}>
            <Text weight="350"> Things to know  </ Text>
            </Paper>
          </Grid.Col>

          <Grid.Col span={12}>
          <Paper shadow="sm" pt="sm" mt="sm" style={{padding:'3%'}}>
            <Text weight="350"> House Composition  </ Text>
            <Grid style={{ marginTop: '10px' }}>
        <Grid.Col span={2}>
          <Card shadow="xs" padding="lg" radius="md" withBorder>
          <Text weight="bold" size="sm"><IconUsers size={30}/></Text>
          <Text weight="450" size="md">{guests.number} {guests[language]}</Text>

          </Card>
        </Grid.Col>
        <Grid.Col span={2}>
          <Card shadow="xs" padding="lg" radius="md" withBorder>
            <Text weight="bold" size="sm"><IconBed size={30}/></Text>
            <Text weight="450" size="md">{beds.number} {beds[language]}</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={2}>
          <Card shadow="xs" padding="lg" radius="md" withBorder>
          <Text weight="bold" size="sm"><IconBath size={30}/></Text>
          <Text weight="450" size="md">{bath.number} {bath[language]}</Text>
            {/* You can include the icon here if needed */}
          </Card>
        </Grid.Col>
        <Grid.Col span={2}>
          <Card shadow="xs" padding="lg" radius="md" withBorder>
          <Text weight="bold" size="sm"><IconDoor    size={30}/></Text>
          <Text weight="450" size="md">{dinning.number} {dinning[language]}</Text>
          </Card>
        </Grid.Col>
      </Grid>
            </Paper>
          </Grid.Col>
        </Grid>



        <Tabs color="teal" defaultValue="first" variant="outline" style={{marginBottom:'20px'}}>
        <Tabs.List>
          <Tabs.Tab value="first">
          <Text weight="450" size="md"><IconBaselineDensitySmall size={20}/>  Amenities</Text> 
            </Tabs.Tab>
          <Tabs.Tab value="second" color="blue">
          <Text weight="450" size="md"><IconUsers size={20}/> Dealers</Text>
          </Tabs.Tab>
          <Tabs.Tab value="third" color="blue">
          <Text weight="450" size="md"><IconMapPin size={20}/> Location</Text>
          </Tabs.Tab>
          <Tabs.Tab value="forth" color="blue">
          <Text weight="450" size="md"><IconStar size={20}/> Reviews</Text>
          </Tabs.Tab>

          <Tabs.Tab value="fifth" color="blue">
          <Text weight="450" size="md"><Icon360View size={20}/> Tour </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
        <Text weight="450" size="xl"> Amenities </ Text>
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
        <Text weight="450" size="xl"> Dealers </ Text>
        </Tabs.Panel>

        <Tabs.Panel value="third" pt="xs">
        <Text weight="450" size="xl"> Location </ Text>
        </Tabs.Panel>
        <Tabs.Panel value="forth" pt="xs">
        <Text weight="450" size="xl"> Reviews  </ Text>
        </Tabs.Panel>
        <Tabs.Panel value="fifth" pt="xs">
        <Text weight="450" size="xl"> 360 View </ Text>
        </Tabs.Panel>
    </Tabs>
      <br></br>
      <Text weight="450" size="xl" style={{marginBottom:'15px'}}> Similar Houses </ Text>
      <SimilarProducts language={language} activeTab={activeTab} />
      <br></br>

      
      {/* <Card 
      shadow="sm" 
      padding="lg" 
      radius="md" withBorder         
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <Image 
        src={isHovered ? card_image.second : card_image.first} 
        width={243} 
        alt="Norway" 
        />

        <Text>{description[language]}</Text>
        <Text>{`Mode: ${mode[language]}`}</Text>
        <Text>{`Rate: ${rate}`}</Text>
        <Text>{`Status: ${status[language]}`}</Text>
        <Text>{`Location: ${location[language]}`}</Text>
        <Text>{`Price: ${price} ${currency}`}</Text>

        </Card> */}



   </Container>
  );
};

export default ProductDetails;


