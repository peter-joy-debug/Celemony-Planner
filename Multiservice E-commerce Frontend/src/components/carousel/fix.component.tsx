// import { Carousel } from '@mantine/carousel';

// export function FixComponent() {
//   return (
//     <Carousel
//       withIndicators
//       height={150}
//       slideSize="20%"
//       slideGap="md"
//       loop
//       align="start"
//       breakpoints={[
//         { maxWidth: 'md', slideSize: '50%' },
//         { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
//       ]}
//     >
//       <Carousel.Slide>
//         <div style={{backgroundColor:'yellow', padding:'50px'}}></div>
//       </Carousel.Slide>
//       <Carousel.Slide>
//       <div style={{backgroundColor:'green', padding:'50px'}}></div>
//       </Carousel.Slide>
//       <Carousel.Slide>
//       <div style={{backgroundColor:'brown', padding:'50px'}}></div>
//       </Carousel.Slide>
//       <Carousel.Slide>
//       <div style={{backgroundColor:'indianred', padding:'50px'}}></div>
//       </Carousel.Slide>
//       {/* ...other slides */}
//     </Carousel>
//   );
// }

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles,Accordion, Paper, Text, Title, Button, useMantineTheme, rem, Container , Grid} from '@mantine/core';
import {ActionsGrid} from './grid.category';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(200),
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
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  accordItem:{
    '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'scale(1.05)',
        backgroundColor:'green',
      },
  },
}));




export function FixComponent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container   my="md"   style={{backgroundColor:'rgba(44, 130, 201,0.3)',padding:'12px',borderRadius:'30px'}}>



    <Accordion
      styles={{
        item: {
          // styles added to all items
          backgroundColor: 'rgba(44, 130, 201,0.3)',
          color:'white',
          border: `${rem(1)} solid #ededed`,

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: 'rgba(44, 130, 201,0.4)',
          },
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      {/* ... Accordion items */}

      <Accordion.Item value="item-1" className="accordItem">
        <Accordion.Control style={{color:'white'}}>Our Booking Category</Accordion.Control>
        <Accordion.Panel>
            <ActionsGrid/>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>

    {/* <Grid>
        <Grid.Col xs={4}>
            Hello
            ySmt-6_!,SpUKER
        </Grid.Col>
    </Grid> */}

    {/* <Grid>
        <Grid.Col>
      <Accordion.Item value="item-1">
        <Accordion.Control>control-1</Accordion.Control>
        <Accordion.Panel>
            <ActionsGrid/>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    </Grid.Col>

            <Grid.Col>
      <Accordion.Item value="item-1">
        <Accordion.Control>control-1</Accordion.Control>
        <Accordion.Panel>
            <ActionsGrid/>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    </Grid.Col>
    </Grid> */}


    
    </Container>
  );
}