import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Text, Grid,rem,Overlay,Title,Button, Image,Group} from '@mantine/core';
import {ImageCard} from './category.card';
import range from '../../assets/img/data.png';
import { IconBrandAndroid, IconDownload, IconBrandApple } from '@tabler/icons-react';


const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 400;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Promotion() {
  const theme = useMantineTheme();
  // console.log("This data", range);
  
  const imageData=[
    {
      "image": "https://images.unsplash.com/photo-1613067532743-33c628bc7e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHZlbnVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "link": "https://mantine.dev/",
      "title": "Wedding Places & Gardens",
      "author": "Robert Gluesticker",
      "views": 7847,
      "comments": 50,
      "sizes":`${BASE_HEIGHT}`
    },
    {
      "image": "https://images.unsplash.com/photo-1506434304575-afbb92660c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "link": "https://mantine.dev/",
      "title": "Professional Photographers",
      "author": "Silver Golden",
      "views": 7847,
      "comments": 70,
      "sizes":`${BASE_HEIGHT/2}`
    },
    {
      "image": `${range}`,
      "link": "https://mantine.dev/",
      "title": "Wedding cars collection",
      "author": "Range Rover",
      "views": 947,
      "comments": 70,
      "sizes":`${BASE_HEIGHT/2}`
    }
  ];
  return (
    
    <Container my="lg" style={{backgroundColor: 'hsl(0, 0.7%, 80.1%)', padding:'12px 0px 12px 0px'}} size="xl" fluid size="xl">
    <Container my="lg" style={{}} size="xl">
    <br></br>
      <div style={{marginTop:'-100px',marginLeft:'0px'}}>
      <Text size="xs" 
    style={{    
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    borderRadius:'20px',
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(30),
    backgroundColor:theme.white,
    width:'80%',
    // boxShadow: '1px 2px 17px rgba(0,0,0,0.7)',
    padding:'20px 20px',

    color:'black',
    marginTop: theme.spacing.xs,}}>
          Download app 
          <br></br>
      </Text>

      <br></br>
      </div>

<div >

      <Container  size="lg" >
       

        <Grid>
        <Grid.Col span={4}>
        {/* <Title style={{color:'rgba(100,100,100,0.9)'}}>Get Our Mobile App!</Title> */}
        <Text  size="md" mt="xl" pt="xs">
          Get fully functional accessible Mobile app applications faster than ever – Join
          more than 20 Million users on Both Android and App Store!
        </Text>
        <Group gap="xs" style={{marginBottom:'10px'}}>

          <Button variant="default" color="light" size="lg" radius="md" mt="xl" style={{boxShadow: '1px 2px 17px rgba(0,0,0,0.7)'}}>
          Android<IconBrandAndroid size={25} />
          </Button>

          <Button variant="default" color="light" size="lg" radius="md" mt="xl">
            Apple <IconBrandApple size={25} />
          </Button>
        </Group>

        </Grid.Col>
        <Grid.Col span={8}>
        <Image
          radius="xl"
          h={270}
          style={{marginTop:'-200px'}}
          w="auto"
          fit="contain"
          src="https://assets.materialup.com/uploads/d5921479-9abb-4d78-993a-308f2a29d73a/preview.gif"
          // src="https://cdn.dribbble.com/users/10672487/screenshots/17709090/media/6701b4accbfbcde7485cbbcb6ed2272c.jpg"
          // src="https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2020/12/mobile-app-hero2x-en-1830x854.png"
        />
        </Grid.Col>
      </Grid>
      </Container>
    </div>



    </Container>
    </Container>
  );
}