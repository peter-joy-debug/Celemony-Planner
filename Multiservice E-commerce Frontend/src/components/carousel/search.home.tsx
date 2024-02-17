import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem, Paper, Text, Group } from '@mantine/core';
import { IconSearch, IconArrowRight, IconBuildingCottage, IconCar, IconTie, IconChefHat, IconFriends, IconVinyl, IconUser } from '@tabler/icons-react';

export function SearchHome() {
  const theme = useMantineTheme();

  return (
    <Paper >
    <Text size="sm" style={{marginBottom:'10px'}} c="dimmed">
          Search anything related to 
    </Text>
    <Group style={{marginBottom:'20px'}}>
    <IconBuildingCottage color="grey" size="32px" stroke="1"/>
    <IconCar color="grey" size="32px" stroke="1"/>
    <IconTie color="grey" size="32px" stroke="1"/>
    <IconChefHat color="grey" size="32px" stroke="1"/>
    <IconFriends color="grey" size="32px" stroke="1"/>
    <IconVinyl color="grey" size="32px" stroke="1"/>
    <IconUser color="grey" size="32px" stroke="1"/>
    </Group>
    <TextInput
      radius="xl"
      size="lg"
      placeholder="Search here"
      leftSectionWidth={200}
      rightSectionWidth={100}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={40} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </ActionIcon>
        
      }
     
    />
    </Paper>
  );
}