import {
    createStyles,
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    rem,
  } from '@mantine/core';
  import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCashBanknote,
    IconCoin,
    IconBuildingCottage,
    IconUsers,
    IconCameraHeart,
    IconToolsKitchen2,
    IconUsersGroup,
    IconCar,
    IconTie,
    IconTrees
  } from '@tabler/icons-react';
  
  const mockdata = [
    { title: 'Weeding Hall', icon: IconBuildingCottage, color: 'violet' },
    { title: 'MCs', icon: IconUsers, color: 'indigo' },
    { title: 'Photographers', icon: IconCameraHeart, color: 'blue' },
    { title: 'Kitchen', icon: IconToolsKitchen2, color: 'red' },
    { title: 'Dancers', icon: IconUsersGroup, color: 'teal' },
    { title: 'Car Collection', icon: IconCar, color: 'cyan' },
    { title: 'Weeding Clothes', icon: IconTie, color: 'pink' },
    { title: 'Garden', icon: IconTrees, color: 'green' },
  ];
  
  const useStyles = createStyles((theme) => ({
    card: {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    backgroundColor: 'rgba(0,0,0,0.0)',
    border:'none',
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 700,
    },
  
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: theme.radius.md,
      height: rem(40),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'box-shadow 150ms ease, transform 100ms ease',
  
      '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'scale(1.05)',
      },
    },
  }));
  
  export function TopFilter() {
    const { classes, theme } = useStyles();
  
    const items = mockdata.map((item) => (
      <UnstyledButton key={item.title} className={classes.item}>
        <item.icon color={theme.colors[item.color][6]} size="1rem" />
        <Text size="xs" mt={2}>
          {item.title}
        </Text>
      </UnstyledButton>
    ));
  
    return (
      <Card withBorder radius="md" className={classes.card}>
        <Group position="apart">
          {/* <Text className={classes.title}>Our Booking Categories</Text> */}
        </Group>
        <SimpleGrid cols={8} mt="sm">
          {items}
        </SimpleGrid>
        <br></br>
        {/* <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
            + View more categories ( 21 )
        </Anchor> */}
      </Card>
    );
  }