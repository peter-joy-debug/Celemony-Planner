import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Container, Overlay,Card } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(20),
    marginTop: theme.spacing.xs,
  },

  titles: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  controls: {
    color: 'green',
    fontSize: rem(24),
    position: 'absolute',
    marginTop:rem(-20),
    marginLeft:'80%',
    width:'20%',
    float:'right',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    // justifyContent: 'space-between',
    padding: rem(7),
    zIndex: 2,
    background: '#332D2D',
    borderRadius:'20px',
    fontSize:'40px',
    boxShadow: '1px 2px 80px rgba(0,0,0,0.2)',

  },
  carouselSection:
  {
    backgroundColor:'rgba(255,255,255,0.1)',
    padding:'50px 40px 40px 40px',
    // marginTop:rem(-55),
    boxShadow: '1px 2px 50px rgba(0,0,0,0.5)',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Cards({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (


    <Paper
      shadow="xl"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      
    >

      <div>
      
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <br></br>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
     </div>
      <Button variant="white" color="dark">
        View more
      </Button>
   
    </Paper>



//     <Paper
//     shadow="md"
//     p="xl"
//     radius="md"
//     sx={{ backgroundImage: `url(${image})` }}
//     className={classes.card}
//     >

//     <div>
//       <Text className={classes.category} size="xs">
//         {classes.category}
//       </Text>
//       <Title order={3} className={classes.title}>
//         {classes.title}
//       </Title>
//     </div>
//     <Button variant="white" color="dark">
//       Read article
//     </Button>
//   </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export function CategoryComponent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { classes } = useStyles();
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Cards {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="xl" shadow="xl" p="md" withBorder style={{marginTop:'-10px'}}>
    <Title order={3} className={classes.titles} style={{color:'black'}}>
       Top Bookings
    </Title>
    <br></br>
    <br></br>

    <Carousel
      slideSize="25%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      classNames={{controls: classes.controls,}}
      className={classes.carouselSection}
    //   className="shadow-effect"
      slidesToScroll={mobile ? 1 : 2}

    >
      {slides}
      {/* <style jsx>{`
              .shadow-effect {
                box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
              }
            `}</style> */}
    </Carousel>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </Container>


  

  );
}