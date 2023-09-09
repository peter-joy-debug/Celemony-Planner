import React from 'react';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import {
  Container,
  Grid,
  Select,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  createStyles,
  Image,
  Card,
  Text,
  TextInput,
  Group,
  Button,
  getStylesRef,
  rem,
  Navbar,
  ScrollArea,
  Code,
  UnstyledButton,
  Checkbox,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { Collapse } from '@nextui-org/react';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import { CelemonyPicker } from './celemony.category';
import {FixComponent} from './fix.component';
import {SearchCarousel} from './search.carousel';
// import { PlacePicker } from './place.category';
import {ActionsGrid} from './grid.category';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from './sidenav.carousel';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  slideContent: {
    position: 'absolute',
    bottom: rem(70),
    zIndex: 2,
    left: rem(24),
    right: rem(24),
    textAlign: 'center',
  },
  controls: {
    color: 'green',
    fontSize: rem(50),
    position: 'absolute',
    marginTop:rem(452),
    marginLeft:'75%',
    width:'20%',
    float:'right',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    padding: rem(14),
    zIndex: 2,
    background: 'hsl(206.6, 89.7%, 54.1%)',
    borderRadius:'20px',
    fontSize:'40px',
    boxShadow: '1px 2px 80px rgba(0,0,0,0.9)',

  },
  title: {
    fontSize: rem(24),
    fontWeight: 500,
    zIndex: 2,
    position: 'relative',
    marginBottom: rem(8),
    color: theme.white,
  },
  price: {
    fontSize: rem(16),
    fontWeight: 400,
    color: theme.white,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rem(8),
    color: theme.white,
  },
  star: {
    marginRight: rem(4),
    color: theme.yellow,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },

  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const images = [
  {
    src:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    title: 'Product 1',
    price: '$19.99',
    rating: 4.5,
  },
  {
    src:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80',
    title: 'Product 2',
    price: '$29.99',
    rating: 3,
  },
  {
    src:
      'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    title: 'Product 3',
    price: '$39.99',
    rating: 5,
  },
  {
    src:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    title: 'Product 4',
    price: '$49.99',
    rating: 4.5,
  },
  {
    src:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    title: 'Product 5',
    price: '$59.99',
    rating: 4,
  },
];

const PRIMARY_COL_HEIGHT = rem(480);

export default function Carousels() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  const slides = images.map((image) => (
    <Carousel.Slide key={image.src}>
      <Image src={image.src} height={480} />
      <div className={classes.overlay}></div>
      <div className={classes.slideContent}>
        <Text className={classes.title}>{image.title}</Text>
        <Text className={classes.price}>{image.price}</Text>
        <div className={classes.rating}>
          <IconStar className={classes.star} size={18} />
          <Text>{image.rating.toFixed(1)}</Text>
        </div>
      </div>
    </Carousel.Slide>
  ));
  const overlayContent = (
    <div className={classes.overlayContent}>
      <Text weight={500} style={{ color: 'white' }}>
        Overlay Content
      </Text>
      <Group direction="column" spacing={2}>
        {/* Add your overlay content components here */}
      </Group>
    </div>
  );
  return (
    <Container my="md" style={{ maxWidth: '98%' }}>
      {/* Updated: Set the maxWidth of the Container */}
      <Grid spacing="md" breakpoints={[{ maxWidth: 'MD', cols: 1 }]}>


        <Grid.Col xs={12}>
          <div>
            <div className="carousel-wrapper">
              <Carousel
                withIndicators
                loop
                transitionDuration={700}
                classNames={{
                  root: classes.carousel,
                  controls: classes.controls,
                  indicator: classes.carouselIndicator,
                }}
                style={{height:'auto'}}
              >
                {slides}
              </Carousel>
              {/* <div className="overlay"></div> */}
              <div className="text-and-button">
                <Text weight={500} style={{ marginBottom: 8, color: 'white' }}>
                  {/* Product Categories */}
                </Text>
                <Group direction="column" spacing={2}>
                  {/* <CelemonyPicker /> */}
                  {/* <ActionsGrid /> */}
                  {/* <FixComponent/> */}
                </Group>
                <div className="search-tab" style={{boxShadow: '1px 2px 70px rgba(0,0,0,0.6)'}}>
                <Text weight={500} style={{ color: 'black' }}>
                  
                </Text>
                <SearchCarousel/>
              </div>
              </div>
            </div>
            <style jsx>{`
              .carousel-wrapper {
                position: relative;
                flex-grow: 1;
                margin-right: ${rem(16)};
              }

              .text-and-button {
                position: absolute;
                top: 40%;
                // width:95%;
                // background-color:rgba(0,0,0,0.3);
                padding:12px;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2; // Updated: Set the z-index to 2 to bring the content in front of the overlay and dots
                text-align: center;
              }

              .side-section {
                width: 240px;
              }

              .search-tab {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 12px;
                border-radius: 8px;
              }
            `}</style>
          </div>
        </Grid.Col>
      </Grid>
    </Container>

    
  );
}
