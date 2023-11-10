
import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem,Paper,Badge, Avatar, Tooltip } from '@mantine/core';
import React, { useState } from 'react';
import { IconHeart, IconHeartFilled,IconMapPinFilled,IconUsers,IconStarFilled } from '@tabler/icons-react';
import styles from './PlaceCard.module.css'; // Import CSS module for styles

export function PlaceCard({ title, description,mode, rate, status, location, price, currency, dealer, post_date, card_image}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const handleToggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (

    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card.Section component="a">
        <Image
          // src={isHovered ? 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80' : 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'}
          src={isHovered ? card_image.second : card_image.first}
          height={243}
          alt="Norway"
        />
        <Paper
          padding="xs"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(255,255,255, 0.9)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleToggleWishlist}
        >
          {isWishlist ? <IconHeartFilled size={30} color="red" style={{ fill: 'tomato' }}/> :  <IconHeart size={30} color="tomato" />}
        </Paper>

        <Paper
          padding="xs"
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            backgroundColor: 'rgba(255,255,255, 0.9)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleToggleWishlist}
        >
          <Badge color="gray" variant="light">
          {mode}
          </Badge>
        </Paper>

        <Paper
          padding="xs"
          style={{
            position: 'absolute',
            top: '210px',
            left: '110px',
            width:'160px',
            backgroundColor: 'rgba(255,255,255, 0.0)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          // onClick={handleToggleWishlist}
        >
          


      <Group mt="5px" position="apart">

      <Tooltip.Group openDelay={300} closeDelay={100} >

      <Avatar.Group spacing="sm" style={{backgroundColor:'rgba(0,0,0,0.099)',padding:'3%',borderRadius:'20px',paddingLeft:'0%',width:'180px',}}>

      <Text size="sm"  style={{paddingBottom:'1px',paddingLeft:'4%'}} color="#fff">
        {/* <IconUsers size={20} color="gray" />  */}
        Dealer
        </Text>&nbsp;&nbsp;&nbsp;&nbsp;

            <Tooltip label="Jenner Dania" withArrow>
              <Avatar  src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" radius="xl" />
            </Tooltip>
            <Tooltip label="Peter Joy" withArrow>
              <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww" radius="xl" />
            </Tooltip>
            <Tooltip label="Grace Raa" withArrow>
              <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" radius="xl" />
            </Tooltip>
            {/* <Tooltip
              withArrow
              label={
                <>
                  <div>John Outcast</div>
                  <div>Levi Capitan</div>
                </>
              }
            > */}
              <Avatar radius="xl">+20</Avatar>
            {/* </Tooltip> */}

          </Avatar.Group>
          </Tooltip.Group> 
      {/* <Text  variant="outline" color="dimmed" size="sm">
          Unfurnished
        </Text> */}
        </Group>


          {/* </Badge> */}
        </Paper>

      </Card.Section>

      <Group position="apart" mt="xl" >
        <Text weight={500} size="lg">
          {title}
          
        </Text>
        <Text  color="dimmed" size="sm"> 
          {post_date}      
        </Text>

      </Group>

      <Group mt="sm"  position="apart">
        <Text color="dimmed" size="sm">
          {/* {title} */}
           <IconMapPinFilled size={20}/> {location.en}
        </Text>
        <Text color="dimmed" size="sm"> 
      
          <Badge color="gray" >
          <IconStarFilled size={11}/> {rate}
          </Badge>
          
        </Text>

      </Group>
      
      <Group mt="5px"   position="apart">
      <Text  variant="outline" color="dimmed" size="sm">
          {status}
        </Text>

        <Text  variant="outline" size="sm"  weight={500} style={{backgroundColor:'rgba(0,0,0,0.03)',padding:'2%',borderRadius:'10px', boxShadow: '0px 0px 1px rgba(0,0,0,0.08)'}}>
          {price} {currency}
        </Text>

      </Group>



      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
