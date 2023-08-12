import React from 'react'
import CarouselBanner from '../Components/CarouselBanner/CarouselBanner'

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
  return (
    <CarouselBanner banners={banners} />
  )
}

export default Home