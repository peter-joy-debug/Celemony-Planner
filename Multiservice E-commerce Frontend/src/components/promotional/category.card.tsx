import React, { useState } from 'react';
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, createStyles, getStylesRef, rem, Button, useMantineTheme } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        // height: rem(280),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        '&:hover': {
          [`& .${getStylesRef('image')}`]: {
            transform: 'scale(1.10)',
          },
        },
      },
      buttonContainer: {
        position: 'absolute',
        bottom: rem(20),
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0,
        transition: 'opacity 300ms ease',
        zIndex: 2, // Ensure it's above the overlay
      },
    
      button: {
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        fontWeight: 600,
        // textTransform: 'uppercase',
        letterSpacing: '0.8px',
        // borderRadius: theme.radius.xl,
        fontSize: theme.fontSizes.sm,
        border: 'none',
        boxShadow: theme.shadows.md,
  
      transform: 'scale(1)',
      transition: 'transform 200ms ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
      hovered: {
        '& $buttonContainer': {
          opacity: 1,
          transform: 'translateY(50%)',
        },
        // ... other hover styles
        padding: '20px', // Change the background color when hovered
      },
  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
    zIndex: 1, // Ensure it's above the overlay
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

interface ImageCardProps {
  link: string;
  image: string;
  title: string;
  author: string;
  views: number;
  comments: number;
  sizes: string;
}

export function ImageCard({ image, title, author, views, comments, link, sizes }: ImageCardProps) {

    const [isHovered, setIsHovered] = useState(false);
    const { classes, theme } = useStyles();
    const buttonStyles = {
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        fontWeight: 600,
        // textTransform: 'uppercase',
        letterSpacing: '0.8px',
        // borderRadius: theme.radius.xl,
        fontSize: theme.fontSizes.sm,
        border: 'none',
        boxShadow: theme.shadows.md,
  
      transform: 'scale(1)',
      transition: 'transform 600ms ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      };
      const divStyles = {
        // backgroundColor: isHovered ? theme.colors.teal[7] : theme.colors.teal[6],
        position: 'absolute',
        bottom: theme.spacing.md,
        left: isHovered? '0%':'50%',
        // transform: isHovered ?'translateY(-150%)',
        textAlign: 'center',
        width: '100%',
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? 'translateY(-150%)': '',
        transition: isHovered ? 'opacity 600ms ease, transform 600ms ease':'',
        zIndex: 2, // Ensure it's above the overlay

      };
  return (
    <Card
    p="lg"
    shadow="lg"
    className={`${classes.card} ${isHovered ? classes.hovered : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    radius="md"
    component="div"
    href="#"

    // target="_blank"
    style={{ height: `${sizes}px` }}

  >
    <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
    <div className={classes.overlay} />

    <div className={classes.content}>
        
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {author}
            </Text>

            <Group spacing="lg">
              <Center>
                <IconEye size="1rem" stroke={1.5} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {views}
                </Text>
              </Center>
              <Center>
                <IconMessageCircle size="1rem" stroke={1.5} color={theme.colors.dark[2]} />
                <Text size="sm" className={classes.bodyText}>
                  {comments}
                </Text>
              </Center>

              <Center>
  
              </Center>
            </Group>
            <Group spacing="lg">
            {/* <div className={`${classes.buttonContainer} ${isHovered ? 'hovered' : ''}`}>
                <Button className={classes.button}>Click Me</Button>
            </div> */}

                <div className={classes.buttonContainer} style={divStyles}>
                    <Button 
                    className={classes.button} style={buttonStyles}     
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    // href="https://twitter.com/mantinedev"
                    leftIcon={<IconArrowUpRight size={rem(18)} />}
                    styles={(theme) => ({
                        root: {
                          backgroundColor: '#00acee',
                          border: 0,
                          height: rem(42),
                          paddingLeft: rem(20),
                          paddingRight: rem(20),
                          '&:not([data-disabled])': theme.fn.hover({
                            backgroundColor: theme.fn.darken('#00acee', 0.05),
                          }),
                        },
              
                        leftIcon: {
                          marginRight: theme.spacing.md,
                        },
                      })}
                    >

                    View more
                    </Button>
                </div>

            </Group>

          </Group>

        </div>
        

      </div>
     
    </Card>
  );
}