import { createStyles, Paper, Text, ThemeIcon, rem,Image, Box, Grid,Blockquote } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    // position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    width:'100%',
    height:rem(430),
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 4)`,

    '&:hover': {
      boxShadow: theme.shadows.lg,
    //   transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(50),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.blue[6]),
    },
  },
}));

interface CardGradientProps {
  title: string;
  description: string;
}

export function TestmonyCard({ title, description }: CardGradientProps) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      {/* <ThemeIcon
        size="lg"
        // radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: 'blue', to: 'blue' }}
      > */}
        {/* <IconColorSwatch size={rem(28)} stroke={1.5} /> */}
        {/* <Box maw={100} mx="auto"> */}
        <Grid 
        style={{marginTop:'-60px',position: 'absolute',}}
        >
            <Grid.Col xs={7}>
            <Image
            radius="md"
            src="https://media.istockphoto.com/id/1323090122/photo/portrait-of-laughing-african-girl-in-white-t-shirt-looking-at-camera-isolated-on-gray.webp?b=1&s=170667a&w=0&k=20&c=MP2ldO1wmF1jqbbJ84uW6jWQVQdaIWup28Ldk3GwEGY="
            alt="No image"
            style={{width:'90%',boxShadow: '1px 2px 20px rgba(0,0,0,0.3)',borderRadius:'15px'}}
            // caption="My dog begging for treats"
            />
            </Grid.Col>
            <Grid.Col xs={4}>
                {/* <br></br> */}
                <br></br>
            <Text size="lg" weight={400} mt="md" style={{borderTop:'1px solid black', borderBottom:'1px solid black',paddingLeft:'20px',width:'90%'}}>
                {title}
            </Text>
            </Grid.Col>
            <Grid.Col xs={12}>
            <Blockquote color="dark" cite="– Hannah Brook">
            <Text size="sm" mt="sm" color="dimmed">
            {description}
            </Text>
            </Blockquote>

            </Grid.Col>
        </Grid>


    </Paper>
  );
}