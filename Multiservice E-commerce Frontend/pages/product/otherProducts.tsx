import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla,  } from '@mantine/carousel';
import { Progress, Card, Image, Text, Badge, Button, Group, Container } from '@mantine/core';

export function SimilarProducts() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
    <Container size="xl" style={{backgroundColor:'rgba(0,0,0,0.04)', borderRadius:'10px'}} pt="xl" >
      <Carousel
        dragFree
        slideSize="25%"
        slideGap="md"
        // height={200}
        getEmblaApi={setEmbla}
        initialSlide={1}
      >
        <Carousel.Slide>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={200}
                    alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink" variant="light">
                    On Sale
                    </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more of the magical 
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    Book classic tour now
                </Button>
        </Card>
        </Carousel.Slide>
       
        {/* ...other slides */}
        <br></br>

      </Carousel>
      <Progress
        value={scrollProgress}
        maw={320}
        size="sm"
        mt="xl"
        mx="auto"
      />
      </Container>
    </>
  );
}