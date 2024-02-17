import { Card, Overlay, Button, Text, rem } from '@mantine/core';
import classes from './HomeCard.module.css';
import { IconCheck, IconCalendarEvent, IconArrowRight } from '@tabler/icons-react';

export function HomeCard() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />
       
      <div className={classes.content}>
        <IconCalendarEvent style={{ width: rem(40), height: rem(40) }} stroke={1.5}/>
        <Text size="lg" fw={350} className={classes.title} style={{marginBottom:'12px'}}>
          Plan & save
        </Text>

        <Text size="sm" className={classes.description} style={{marginBottom:'25px'}}>
          With our platform, you can save more than 10 hours while planning your celemony event.
        </Text>

        <Button className={classes.action} variant="outline" color="dark" size="lg">
         Plan Celemony <IconArrowRight />
        </Button>
      </div>
    </Card>
  );
}