import { BackgroundImage, Center, Text, Box, Paper, Grid, Skeleton,Container, Group, Button } from '@mantine/core';
import {HomeCard} from './home.card';
import {SearchHome} from './search.home';
const child = <Skeleton height={100} radius="md" animate={false} />;
export function Cover() {
  return (
    <Paper 
    style={{
        borderTopRightRadius:'120px', 
        borderBottomRightRadius:'120px', 
        padding:'5px 12px',
        
    }} >
    <Group gap="xs">
      <HomeCard/>
      <SearchHome/>
      {/* <HomeCard/>      */}
    </Group>
    <br/>
    </Paper>
  );
}