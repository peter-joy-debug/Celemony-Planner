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
    Tabs,
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
    Checkbox, } from '@mantine/core';
    import { DatePickerInput } from '@mantine/dates';

    const useStyles = createStyles((theme) => ({
      root: {
        position: 'relative',
      },
    
      input: {
        height: rem(54),
        paddingTop: rem(18),
      },
    
      label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
      },
    }));
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

export function SearchCarousel() {

  const { classes } = useStyles();
  return (
    <center>
    <Tabs variant="pills" placement="center" radius="xl" defaultValue="gallery">

    <Tabs.List style={{backgroundColor:'rgba(0,0,0,0.1)', borderRadius:'20px'}} position="center">
      <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>Halls</Tabs.Tab>
      <Tabs.Tab value="messages" icon={<IconMessageCircle size="0.8rem" />}>Cars</Tabs.Tab>
      <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings </Tabs.Tab>
      <Tabs.Tab value="photo" icon={<IconSettings size="0.8rem" />}>Photographers </Tabs.Tab>
    </Tabs.List>
    
        <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content

        {/* <Select
        mt="md"
        withinPortal
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
        /> */}
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
        Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
        Settings tab content
        </Tabs.Panel>

        <Tabs.Panel value="photo" pt="xs">
        Photographers tab content
        </Tabs.Panel>
        </Tabs>
        </center>
  );
}