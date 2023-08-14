import React from 'react'
import CarouselBanner from '../Components/CarouselBanner/CarouselBanner'
import SlideShow from '../Components/SlideShow/slideShow';
import ProductListing from '../Components/Products/productListing';
import { Typography } from '@mui/material';

function Home() {
    const banners = [
        {
          title: 'Welcome to Our Website',
          description: 'This is banner 1.',
          imageUrl: '/Banner.webp',
        },
        {
          title: 'Discover Our Services',
          description: 'This is banner 2.',
          imageUrl: 'yoga2.jpeg',
        },
        {
          title: 'Get Started Today',
          description: 'This is banner 3.',
          imageUrl: 'yoga3.jpeg',
        },
      ];
      const products = [
        {
          id: 1,
          name: 'Product 1',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 2',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 3',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 4',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 5',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 6',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 7',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 8',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 9',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 10',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 11',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 12',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 13',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 14',
          image: '/Banner.webp',
          price: 29.99,
        },
        {
          id: 1,
          name: 'Product 15',
          image: 'yoga3.jpeg',
          price: 19.99,
        },
        {
          id: 2,
          name: 'Product 20',
          image: '/Banner.webp',
          price: 29.99,
        },
        // Add more product data as needed
      ];
      const sampleProducts = [
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },
        {
          id: 1,
          name: 'Product A',
          price: '$10',
          imageUrl: '/Banner.webp',
        },
        {
          id: 2,
          name: 'Product B',
          price: '$15',
          imageUrl: 'yoga3.jpeg',
        },
        {
          id: 3,
          name: 'Product C',
          price: '$25',
          imageUrl: '/Banner.webp',
        },

        // Add more products as needed
      ];
  return (
    <>
    <CarouselBanner banners={banners} />
    <SlideShow />
    <Typography>Products</Typography>
    <ProductListing products={products} />
    {/* <CarouselBanner banners={[banners[0]]} isSlider={false} /> */}
    </>
  )
}

export default Home