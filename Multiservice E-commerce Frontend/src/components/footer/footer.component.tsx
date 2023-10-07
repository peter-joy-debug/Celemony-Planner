import { createStyles, Text, Container, ActionIcon, Group, rem,Grid } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
    groupsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: rem(20),
        justifyContent: 'center', // Center the groups horizontally
      },
    
      linksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: rem(5),
      },

    footer: {
        marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
        display: 'flex',
        flexDirection: 'column', // Set the footer to flex column to handle responsive layout
        alignItems: 'center', // Center the content horizontally
      },

      logo: {
        maxWidth: rem(200),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      
        [theme.fn.smallerThan('sm')]: {
          marginTop: theme.spacing.xs,
        },
      },
      
      description: {
        marginTop: rem(5),
        textAlign: 'center',
      
        [theme.fn.smallerThan('sm')]: {
          marginTop: theme.spacing.xs,
        },
      },

      inner: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Allow groups to wrap on smaller screens
      
        [theme.fn.smallerThan('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      },

      groups: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the groups horizontally
        gap: rem(30), // Add some gap between the groups
      
        [theme.fn.smallerThan('sm')]: {
          
        },
      },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },  

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
        <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <div>{links}</div>
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
      <Grid>
        <Grid.Col xs={3}>
            <div className={classes.logo}>
            <Text size="lg" color="white" className={classes.logo} style={{backgroundColor:"black",padding:'0px 0px 0px 10px', borderRadius:'20px',width:'70%'}}>
                DC|Rentos
            </Text>
            <Text size="xs" color="dimmed" className={classes.description}>
                Build fully functional accessible web applications faster than ever
            </Text>
            </div>
        </Grid.Col>
        <Grid.Col xs={9}>
        <div className={classes.groups}>{groups}</div>
        </Grid.Col>
      </Grid>
        
        {/* <div className={classes.groups}>{groups}</div> */}
        
        {/* <div className={classes.groupsContainer}>{groups}</div> */}
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 DC|Rentos.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}