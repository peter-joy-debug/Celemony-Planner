import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getHousePropertyData } from '../../src/data/propertyData/propertyTabData';
import { Card, Text, Image, Grid, SimpleGrid, Skeleton,Container, rem } from '@mantine/core'; // Import only the necessary Mantine components
import CryptoJS from 'crypto-js';


const PRIMARY_COL_HEIGHT = rem(400);

const ProductDetails = () => {
  const SECONDARY_COL_HEIGHT = rem(192);
  const router = useRouter();
  const { productId, enc } = router.query;
  const [product, setProduct] = useState(null);
  const [language, setLanguage] = useState(''); // Initialize language state
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
      const { language: decryptedLanguage, activeTab } = decryptedParamsObject;
      console.log("Language Decrypted: ",decryptedLanguage);
      console.log("Tab: ",activeTab);
      // Set the language state
      setLanguage(decryptedLanguage);

      // Fetch product data based on the active tab and language
      const productsData = getHousePropertyData(activeTab, decryptedLanguage);

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

  return (
    <Container size="xl">
      <Text color="dimmed">Home / Products / House / {title[language]}</Text>
      <h3>{title[language]}</h3>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{marginBottom:'20px'}}>
        <Grid>
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
        </Grid>
        
       
      </SimpleGrid>



      <Card 
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
        {/* Rest of your product details rendering logic */}
        <Text>{description[language]}</Text>
        <Text>{`Mode: ${mode[language]}`}</Text>
        <Text>{`Rate: ${rate}`}</Text>
        <Text>{`Status: ${status[language]}`}</Text>
        <Text>{`Location: ${location[language]}`}</Text>
        <Text>{`Price: ${price} ${currency}`}</Text>
        {/* Render other details like dealers, post date, etc. */}
        </Card>
   </Container>
  );
};

export default ProductDetails;


