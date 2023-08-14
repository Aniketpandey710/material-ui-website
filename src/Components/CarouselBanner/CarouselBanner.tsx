import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carouselStyles.css'

// Existing imports and component definition...

// Define the type for each banner data
interface BannerData {
    title?: string;
    description?: string;
    imageUrl: string;
    color?:string;
  }
  
  // Prop type for the CarouselBanner component
  interface CarouselBannerProps {
    banners: BannerData[];
    isSlider?:boolean;
  }
  
  const CarouselBanner: React.FC<CarouselBannerProps> = ({ banners, isSlider=true }) => {
    const settings = {
      dots: isSlider,
      infinite: isSlider,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: isSlider,
      autoplaySpeed: 3000,
    };
    return (
        <Box >
      <Slider {...settings} 
      >
        {banners.map((banner, index) => (
          <Box
            key={index}
            sx={{
              height: '500px',
              background: `url(${banner.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box textAlign="center" color={banner.color}>
              <Typography variant="h3" component="h1" gutterBottom>
                {banner.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {banner.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
        </Box>
    );
  };
  
  export default CarouselBanner;
  