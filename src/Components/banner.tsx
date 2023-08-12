import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Define the prop types for the Banner component
interface BannerProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, imageUrl }) => {
    return (
        <Box
            sx={{
                height: '500px',
                background: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box textAlign="center" color="white">
                <Typography variant="h3" component="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default Banner;
