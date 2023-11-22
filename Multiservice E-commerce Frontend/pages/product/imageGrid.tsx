

import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Grid, Button, Image, Skeleton,Modal,Drawer,ScrollArea, Paper, Group, Text } from '@mantine/core';

const PRIMARY_COL_HEIGHT = '24rem';
const SECONDARY_COL_HEIGHT = '11.5rem';

// Function to determine grid column span based on the number of images
const getGridColumnSpan = (totalImages) => {
  if (totalImages === 1) return 12;
  if (totalImages === 2) return 6;
  if (totalImages === 3) return 4;
  if (totalImages >= 4) return 3;
};

// Function to determine image height based on the index
const getGridImageHeight = (index, displayedImages) => {
  const totalImages = displayedImages.length;

  // Add your custom conditions here
  if (totalImages === 1 || totalImages === 2 || totalImages === 3) {
    return PRIMARY_COL_HEIGHT;
  } else if (totalImages === 4 && index === 0) {
    return PRIMARY_COL_HEIGHT;
  } else {
    return SECONDARY_COL_HEIGHT;
  }
};

const ImageGrid = ({ images }) => {
    const [displayedImages, setDisplayedImages] = useState(images.slice(0, 5));
  const remainingImages = images.slice(4);
  const finalSize = displayedImages.length;
  console.log('Size: ', finalSize);
  const shouldShowViewMore = remainingImages.length > 0;
  const [selectedImage, setSelectedImage] = useState(null);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const openDrawer = (index) => {
    console.log("Index: ",index);
    setSelectedImage(index);
    setDrawerOpened(true);
    setDisplayedImages(images); // Update displayedImages slice when opening the drawer
  };

  const closeDrawer = () => {
    setSelectedImage(null);
    setDrawerOpened(false);
    setDisplayedImages(images.slice(0, 5)); // Restore displayedImages slice when closing the drawer
    close();
  };

  return (
    <>
    {finalSize >= 4 ? (
      <Grid style={{ marginTop: '10px' }}>
        <Grid.Col span={6}>
          {/* Display the first image without Skeleton */}
          <Image
            src={displayedImages[0].img}
            alt={displayedImages[0].caption}
            fit="cover"
            radius="md"
            height={PRIMARY_COL_HEIGHT}
            onClick={() => openDrawer(0)}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Grid gutter="md">
            {displayedImages.slice(1).map((image, index) => (
              <Grid.Col key={index} span={6}>
                <Image
                  src={image.img}
                  alt={image.caption}
                  fit="cover"
                  radius="md"
                  height={SECONDARY_COL_HEIGHT}
                  onClick={() => openDrawer(index + 1)}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>

        {shouldShowViewMore && (
                <Grid.Col span={getGridColumnSpan(finalSize)}>
                  <Button variant="outline" fullWidth onClick={open}>
                    View More
                  </Button>
                </Grid.Col>
              )}
               


        {/* Drawer component for displaying the clicked image */}
        <Drawer.Root opened={drawerOpened} onClose={closeDrawer} size="100%"  position="top">
                    <Drawer.Overlay />
                    <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>
                            <Group>
                            <Button variant="outline" fullWidth onClick={closeDrawer}>
                                Back
                            </Button>
                            <Text>
                            Image Display
                            </Text>                  
                            </Group>
                    </Drawer.Title>
                        <Drawer.CloseButton />
                    </Drawer.Header>
                    <Drawer.Body>
                    <Grid>
                        <Grid.Col span={2}>
                        <Paper style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom:'20px', marginTop:'10px', padding:'10px', textAlign:'center' }} shadow="md" pt="md" mt="md">
                        {/* <ScrollArea h='300px' w="100%"> */}
                            {images.map((image, index) => (
                                
                            <div key={index} style={{ width: '80px', cursor: 'pointer',textAlign:'center' }} >
                                <Image src={image.img} alt={image.caption} fit="cover" radius="md" height="80px" onClick={() =>openDrawer(index)}/>
                            </div>
                                
                            ))}
                        </Paper>
                        </Grid.Col>
                        <Grid.Col span={10}>
                        <Image
                        src={displayedImages[selectedImage]?.img}
                        alt={displayedImages[selectedImage]?.caption}
                        fit="cover"
                        radius="md"
                        height="85%"
                        width="85%"
                        />
                        </Grid.Col>
                    </Grid>        
                    </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Root>
      </Grid>
    ) : (
        <Grid style={{ marginTop: '15px' }}>
        {displayedImages.map((image, index) => (
        <Grid.Col key={index} span={getGridColumnSpan(displayedImages.length)}>
            <Image
            src={image.img}
            alt={image.caption}
            fit="cover"
            radius="md"
            height={getGridImageHeight(index, displayedImages)}
            onClick={() => openDrawer(index)}
            />
        </Grid.Col>
        ))}

        {shouldShowViewMore && (
            <Grid.Col span={getGridColumnSpan(displayedImages.length)}>
            <Button variant="outline" fullWidth>
                View More
            </Button>
            </Grid.Col>
        )}

<Drawer.Root opened={drawerOpened} onClose={closeDrawer} size="100%"  position="top">
                    <Drawer.Overlay />
                    <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>
                            <Group>
                            <Button variant="outline" fullWidth onClick={closeDrawer}>
                                Back
                            </Button>
                            <Text>
                            Image Display
                            </Text>                  
                            </Group>
                    </Drawer.Title>
                        <Drawer.CloseButton />
                    </Drawer.Header>
                    <Drawer.Body>
                    <Grid>
                        <Grid.Col span={2}>
                        <Paper style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom:'20px', marginTop:'10px', padding:'10px', textAlign:'center' }} shadow="md" pt="md" mt="md">
                        {/* <ScrollArea h='300px' w="100%"> */}
                            {images.map((image, index) => (
                                
                            <div key={index} style={{ width: '80px', cursor: 'pointer',textAlign:'center' }} >
                                <Image src={image.img} alt={image.caption} fit="cover" radius="md" height="80px" onClick={() =>openDrawer(index)}/>
                            </div>
                                
                            ))}
                        </Paper>
                        </Grid.Col>
                        <Grid.Col span={10}>
                        <Image
                        src={displayedImages[selectedImage]?.img}
                        alt={displayedImages[selectedImage]?.caption}
                        fit="cover"
                        radius="md"
                        height="85%"
                        width="85%"
                        />
                        </Grid.Col>
                    </Grid>        
                    </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Root>
        </Grid>
              
          )}
        </>
  );
};

export default ImageGrid;

