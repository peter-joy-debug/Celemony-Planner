// import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';
// import { IconStar } from '@tabler/icons-react';

// const useStyles = createStyles((theme) => ({
//   price: {
//     color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//   },

//   carousel: {
//     '&:hover': {
//       [`& .${getStylesRef('carouselControls')}`]: {
//         opacity: 1,
//       },
//     },
//   },

//   carouselControls: {
//     ref: getStylesRef('carouselControls'),
//     transition: 'opacity 150ms ease',
//     opacity: 0,
//   },

//   carouselIndicator: {
//     width: rem(4),
//     height: rem(4),
//     transition: 'width 250ms ease',

//     '&[data-active]': {
//       width: rem(16),
//     },
//   },
// }));

// const images = [
//   'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//   'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
// ];

// export function PlaceCard({title,description}) {
//   const { classes } = useStyles();

//   const slides = images.map((image) => (
//     <Carousel.Slide key={image}>
//       <Image src={image} height={220} />
//     </Carousel.Slide>
//   ));

//   return (
//     <Card radius="md" withBorder padding="xl">
//       <Card.Section>
//         <Carousel
//           withIndicators
//           loop
//           classNames={{
//             root: classes.carousel,
//             controls: classes.carouselControls,
//             indicator: classes.carouselIndicator,
//           }}
//         >
//           {slides}
//         </Carousel>
//       </Card.Section>

//       <Group position="apart" mt="lg">
//         <Text fw={500} fz="lg">
//           {title}
//         </Text>

//         <Group spacing={5}>
//           <IconStar size="1rem" />
//           <Text fz="xs" fw={500}>
//             4.78
//           </Text>
//         </Group>
//       </Group>

//       <Text fz="sm" c="dimmed" mt="sm">
//         {description}
//       </Text>

//       <Group position="apart" mt="md">
//         <div>
//           <Text fz="xl" span fw={500} className={classes.price}>
//             397$
//           </Text>
//           <Text span fz="sm" c="dimmed">
//             {' '}
//             / night
//           </Text>
//         </div>

//         <Button radius="md">Book now</Button>
//       </Group>
//     </Card>
//   );
// }

// import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

// export function PlaceCard({title,description}) {
//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section component="a" href="https://mantine.dev/">
//         <Image
//           src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>

//       <Group position="apart" mt="md" mb="xs">
//         <Text weight={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink" variant="light">
//           On Sale
//         </Badge>
//       </Group>

//       <Text size="sm" color="dimmed">
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button variant="light" color="blue" fullWidth mt="md" radius="md">
//         Book classic tour now
//       </Button>
//     </Card>
//   );
// }
import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem,Paper,Badge } from '@mantine/core';
import React, { useState } from 'react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import styles from './PlaceCard.module.css'; // Import CSS module for styles

export function PlaceCard({ title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const handleToggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (

    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Section component="a">
        <Image
          src={isHovered ? 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80' : 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'}
          height={200}
          alt="Norway"
        />
        <Paper
          padding="xs"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(255,255,255, 0.9)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleToggleWishlist}
        >
          {isWishlist ? <IconHeartFilled size={30} color="red" style={{ fill: 'tomato' }}/> :  <IconHeart size={30} color="tomato" />}
          {/* {isWishlist ? <Text weight={500}>fill</Text> : <Text weight={500}>unfill</Text>} */}
        </Paper>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
