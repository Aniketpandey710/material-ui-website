import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, CardMedia, IconButton, Slider, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Root = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const SliderContainer = styled('div')({
  width: 600,
});

const CardWrapper = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const CardMediaStyled = styled(CardMedia)({
  height: 200,
  width: '100%',
  objectFit: 'cover',
});

const SlideIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});

interface SliderCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SliderCard: React.FC<SliderCardProps> = ({ title, description, imageSrc }) => (
  <CardWrapper>
    <CardMediaStyled image={imageSrc} />
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </CardWrapper>
);

const SlideShow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (event: Event, newValue: number) => {
    setSlideIndex(newValue);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextSlide = () => {
    // Replace 'cardsData.length - 1' with the actual length of your card data array
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, cardsData.length - 1));
  };

  const cardsData: SliderCardProps[] = [
    {
        title: 'Welcome to Our Website',
        description: 'This is banner 1.',
        imageSrc: '/Banner.webp',
      },
      {
        title: 'Discover Our Services',
        description: 'This is banner 2.',
        imageSrc: 'yoga2.jpeg',
      },
      {
        title: 'Get Started Today',
        description: 'This is banner 3.',
        imageSrc: 'yoga3.jpeg',
      },
      {
        title: 'Welcome to Our Website',
        description: 'This is banner 1.',
        imageSrc: '/Banner.webp',
      },
      {
        title: 'Discover Our Services',
        description: 'This is banner 2.',
        imageSrc: 'yoga2.jpeg',
      },
      {
        title: 'Get Started Today',
        description: 'This is banner 3.',
        imageSrc: 'yoga3.jpeg',
      },
      {
        title: 'Welcome to Our Website',
        description: 'This is banner 1.',
        imageSrc: '/Banner.webp',
      },
      {
        title: 'Discover Our Services',
        description: 'This is banner 2.',
        imageSrc: 'yoga2.jpeg',
      },
      {
        title: 'Get Started Today',
        description: 'This is banner 3.',
        imageSrc: 'yoga3.jpeg',
      },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageSrc: 'image_url_1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageSrc: 'image_url_2.jpg',
    },
    // Add more card data as needed
  ];

  return (
    <Root>
      <SliderContainer>
        {/* <Slider value={slideIndex} min={0} max={cardsData.length - 1} /> */}
        
        <SliderCard {...cardsData[slideIndex]} />
        <SlideIcons>
          <IconButton onClick={handlePrevSlide} disabled={slideIndex === 0}>
            <ChevronLeft />
          </IconButton>
          <IconButton onClick={handleNextSlide} disabled={slideIndex === cardsData.length - 1}>
            <ChevronRight />
          </IconButton>
        </SlideIcons>
      </SliderContainer>
    </Root>
  );
};

export default SlideShow;
