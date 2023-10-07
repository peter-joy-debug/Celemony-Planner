import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Text, Grid,rem } from '@mantine/core';
import {ImageCard} from './category.card';
import range from '../../assets/img/data.png';


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
    
    <Container my="md" style={{backgroundColor: 'hsl(206.6, 89.7%, 54.1%)', padding:'12px 0px 12px 0px'}} size="xl" fluid>
    <Container my="md" style={{}} size="xl">
    <br></br>
      <div style={{marginTop:'-100px',marginLeft:'0px'}}>
      <Text size="xs" 
    style={{    
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(30),
    // borderRadius:'50px',
    borderTopRightRadius:'200px',
    width:'80%',
    padding:'20px 20px',
    backgroundColor:'white',
    border:'1px solid hsl(206.6, 89.7%, 54.1%)',
    boxShadow: '1px 2px 50px rgba(0,0,0,0.7)',
    color:'black',
    marginTop: theme.spacing.xs,}}>
          Booking Category
          <br></br>
      </Text>

      <br></br>
      </div>
      <br></br>
      <br></br>
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        {/* {getChild(BASE_HEIGHT)} */}
        <ImageCard
        image={imageData[0].image}
        title={imageData[0].title}
        author={imageData[0].author}
        views={imageData[0].views}
        comments={imageData[0].comments}
        link={imageData[0].link}
        sizes={imageData[0].sizes}
       />
        <Stack>
        <ImageCard
        image={imageData[1].image}
        title={imageData[1].title}
        author={imageData[1].author}
        views={imageData[1].views}
        comments={imageData[1].comments}
        link={imageData[1].link}
        sizes={imageData[1].sizes}
       />

      <ImageCard
        image={imageData[2].image}
        title={imageData[2].title}
        author={imageData[2].author}
        views={imageData[2].views}
        comments={imageData[2].comments}
        link={imageData[2].link}
        sizes={imageData[2].sizes}
       />
          {/* {getChild(getSubHeight(2, px(theme.spacing.md)))} */}
        </Stack>
        <Stack>
          {getChild(getSubHeight(3, px(theme.spacing.md)))}
          {getChild(getSubHeight(3, px(theme.spacing.md)))}
          {getChild(getSubHeight(3, px(theme.spacing.md)))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
    </Container>
  );
}