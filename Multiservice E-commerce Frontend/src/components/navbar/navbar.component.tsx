import React from 'react';
import { Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import {LanguagePicker} from './languages';
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Container,
  Center,
  Select,
  Box,
  Burger,
  ActionIcon,
  Drawer,
  Collapse,
  ScrollArea,
  MenuItem,
  rem,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { mockdata } from '../../data/navbarData/linksData';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(42),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: `calc(${theme.spacing.md} * -1)`,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));

export function HeaderMegaMenu({ language, onLanguageChange }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();


    //Langues

    // const [language, setLanguage] = useState('en'); // Default language is English

    // const changeLanguage = (lang) => {
    //   setLanguage(lang);
    // };

    const changeLanguage = (lang) => {
      onLanguageChange(lang);
      // setLanguage(lang);
    };


    // const handleLanguageChange = (event) => {
    //     const selectedLanguage = event.target.value;
    //     setLanguage(selectedLanguage);
    //     // Perform any additional actions based on the selected language
    //   };
    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
        { value: 'es', label: 'Spanish' },
      ];

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title[language]}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.colors.primary} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title[language]}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description[language]}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));



  // Handling Dark
  const [colorScheme, setColorScheme] = useState('light'); // or 'dark' if the default is dark

  const handleColorSchemeToggle = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
  };


  
  const getBackgroundColor = (colorScheme) => {
    if (colorScheme === 'dark') {
      return '#333333'; // Set your desired dark mode background color
    } else {
      return '#FFFFFF'; // Set your desired light mode background color
    }
  };
  
  const getColor = (colorScheme) => {
    if (colorScheme === 'dark') {
      return '#FFFFFF'; // Set your desired dark mode text color
    } else {
      return '#333333'; // Set your desired light mode text color
    }
  };

  return (
    <Box pb={0} 
        style={{
        backgroundColor: getBackgroundColor(colorScheme),
        color: getColor(colorScheme),
        
      }}
    >


<Header height={0} mb={30}>
      <Container className={classes.inner}>
        {/* <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} /> */}
        <Group className={classes.links} spacing={5}>
          {/* {items} */}
        </Group>

        {/* <MantineLogo size={28} /> */}
        {/* <p>D</p> */}
        

        <Group spacing={0} className={classes.social} position="right" noWrap>
        <Box ml="auto" p={2}>
          <Button
            size="xs"
            variant="outline"
            onClick={() => changeLanguage('en')}
            disabled={language === 'en'}
          >
            En
          </Button>
          <Button
            size="xs"
            variant="outline"
            onClick={() => changeLanguage('fr')}
            disabled={language === 'fr'}
          >
            Fr
          </Button>
          <Button
            size="xs"
            variant="outline"
            onClick={() => changeLanguage('es')}
            disabled={language === 'es'}
          >
            Es
          </Button>
        </Box>
        </Group>
      </Container>
    </Header>

      <Header height={50} px="md"
       style={{
        backgroundColor: getBackgroundColor(colorScheme),
        color: getColor(colorScheme),
      }}>
        <Group position="apart" sx={{ height: '100%' }}>

          <div>
            <p style={{padding:'3px 3px 3px 30px',backgroundColor:'black',color:'white',borderRadius:'30px'}}></p>
          </div>
          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile} 
                 style={{
                    backgroundColor: getBackgroundColor(colorScheme),
                    color: getColor(colorScheme),
                  }}
          >
            <a href="#" className={classes.link}
                   style={{
                    backgroundColor: getBackgroundColor(colorScheme),
                    color: getColor(colorScheme),
                  }}
            >
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal
                   style={{
                    backgroundColor: getBackgroundColor(colorScheme),
                    color: getColor(colorScheme),
                  }}>
              <HoverCard.Target>
                <a href="#" className={classes.link}
                       style={{
                        backgroundColor: getBackgroundColor(colorScheme),
                        color: getColor(colorScheme),
                      }}>
                  <Center inline>
                    <Box component="span" mr={5}
                           style={{
                            backgroundColor: getBackgroundColor(colorScheme),
                            color: getColor(colorScheme),
                          }}>
                      Features
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}
                     style={{
                        backgroundColor: getBackgroundColor(colorScheme),
                        color: getColor(colorScheme),
                      }}>
                <Group position="apart" px="md"
                       style={{
                        backgroundColor: getBackgroundColor(colorScheme),
                        color: getColor(colorScheme),
                      }}>
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}
                       style={{
                        backgroundColor: getBackgroundColor(colorScheme),
                        color: getColor(colorScheme),
                      }}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}
                       style={{
                        backgroundColor: getBackgroundColor(colorScheme),
                        color: getColor(colorScheme),
                      }}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}
                   style={{
                    backgroundColor: getBackgroundColor(colorScheme),
                    color: getColor(colorScheme),
                  }}>
              Learn
            </a>
            <a href="#" className={classes.link}
                   style={{
                    backgroundColor: getBackgroundColor(colorScheme),
                    color: getColor(colorScheme),
                  }}>
              Academy
            </a>
          </Group>

          <Group className={classes.hiddenMobile}
                 style={{
                    backgroundColor: getBackgroundColor(colorScheme),
                    color: getColor(colorScheme),
                  }}>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
            <ActionIcon
                onClick={handleColorSchemeToggle}
                size="lg"
                sx={(theme) => ({
                backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
            </ActionIcon>

        
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        style={{
            backgroundColor: getBackgroundColor(colorScheme),
            color: getColor(colorScheme),
          }}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}