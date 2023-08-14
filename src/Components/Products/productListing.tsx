import React, { useRef, useState } from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  overflowX: 'hidden',
  padding: '16px',
});

const CardWrapper = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '200px',
  marginRight: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CardMediaStyled = styled(CardMedia)({
  height: '200px',
  width: '100%',
  objectFit: 'contain',
});

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductListingProps {
  products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    if (containerRef.current && scrollIndex > 0) {
      containerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
      setScrollIndex(scrollIndex - 1);
    }
  };

  const scrollRight = () => {
    if (containerRef.current && scrollIndex < products.length - 1) {
      containerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div>
      <Container ref={containerRef} style={{display:'flex', gap:'5%', border:'1px solid black'}}>
        {products.map((product, index) => (
            <Box
            key={product.id}
            style={{
            //   transform: `translateX(${(index - scrollIndex) * (200 + 8)}px)`,
              border:'1px solid red',
            }}
            width={500}
            >
                <CardMediaStyled image={product.image} title={product.name} />
             <CardContent>
               <Typography variant="h6">{product.name}</Typography>
              <Typography variant="subtitle1">${product.price.toFixed(2)}</Typography>
            </CardContent>
            </Box>
        //   <CardWrapper
        //     key={product.id}
        //     style={{
        //       transform: `translateX(${(index - scrollIndex) * (200 + 8)}px)`,
        //     }}
        //   >
        //     <CardMediaStyled image={product.image} title={product.name} />
        //     <CardContent>
        //       <Typography variant="h6">{product.name}</Typography>
        //       <Typography variant="subtitle1">${product.price.toFixed(2)}</Typography>
        //     </CardContent>
        //   </CardWrapper>
        ))}
      </Container>
      <div>
        <IconButton onClick={scrollLeft} disabled={scrollIndex === 0}>
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={scrollRight}
          disabled={scrollIndex >= products.length - 1}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductListing;
