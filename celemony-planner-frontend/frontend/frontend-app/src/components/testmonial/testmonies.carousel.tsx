import { Carousel } from '@mantine/carousel';
import {TestmonyCard} from '../cards/testmony.card';
import {rem} from '@mantine/core';

export function TestmonyCarousel() {
  const data={
    title:"Hannah Brook",
    description:" Life is like an npm install – you never know what you are going to get."
  }
  return (
    <Carousel
      maw={700}
      // style={{height:rem(300)}}
      mx="auto"
      indicators
      withIndicators
      height={500}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      <Carousel.Slide>1
        <TestmonyCard title={data.title} description={data.description}/>
      </Carousel.Slide>
      <Carousel.Slide>2
      <TestmonyCard title={data.title} description={data.description}/>
      </Carousel.Slide>
      <Carousel.Slide>3
      <TestmonyCard title={data.title} description={data.description}/>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}