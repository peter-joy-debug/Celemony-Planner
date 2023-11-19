
import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem,Paper,Badge, Avatar, Tooltip } from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { IconHeart, IconHeartFilled,IconMapPinFilled,IconUsers,IconStarFilled } from '@tabler/icons-react';
import styles from './PlaceCard.module.css'; // Import CSS module for styles
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';


export function PlaceCard({ productId, title, description,mode, rate, status, location, price, currency, dealer, post_date, card_image,language,activeTab}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const handleToggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  // Function to encrypt parameters

const encryptParams = (language, activeTab) => {
  // Create a JSON object with language and activeTab
  const paramsObject = { language, activeTab };

  // Encrypt and encode the JSON object
  const encryptedParams = CryptoJS.AES.encrypt(JSON.stringify(paramsObject), 'peterjoy_').toString();

  return encodeURIComponent(encryptedParams);
};
  
const linkParams = encryptParams(language, activeTab);

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
      
        >
          


      <Group mt="5px" position="apart">

      <Tooltip.Group openDelay={300} closeDelay={100} >

      <Avatar.Group spacing="sm" style={{backgroundColor:'rgba(0,0,0,0.099)',padding:'3%',borderRadius:'20px',paddingLeft:'0%',width:'180px',}}>

      <Text size="sm"  style={{paddingBottom:'1px',paddingLeft:'4%'}} color="#fff">
        Dealer
        </Text>&nbsp;&nbsp;&nbsp;&nbsp;

                {dealer.slice(0, 3).map((dealerInfo) => (
                <Tooltip key={dealerInfo.id} label={dealerInfo.fullname} withArrow>
                  <Avatar src={dealerInfo.avatar} radius="xl" />
                </Tooltip>
              ))}
              {dealer.length > 3 && (
                <Tooltip
                  withArrow
                  label={`+${dealer.length - 3} more`}
                >
                  <Avatar radius="xl">{`+${dealer.length - 3}`}</Avatar>
                </Tooltip>
                )}
          </Avatar.Group>
          </Tooltip.Group> 

        </Group>



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


      {/* <Link href={{ pathname: `/product/${productId}`, query: { language,activeTab } }} passHref style={{textDecoration:'none'}}>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md" as="a">
        View product details
      </Button>
      </Link> */}

      <Link href={{ pathname: `/product/${productId}`, query: { enc: linkParams } }} passHref style={{textDecoration:'none'}}>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" as="a">
          View product details
        </Button>
      </Link>


    </Card>
  );
}
