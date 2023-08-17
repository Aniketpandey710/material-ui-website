import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

interface props{
    title:string
    description:string
    image?:string

}

export const MediaCard:React.FC<props> = ({title, description, image}) => {
    const theme = useTheme()
    // theme.typography.fontFamily
  return (
    <Card sx={{ maxWidth: 345, m: 2 , height:'40vh', minWidth:'20vh', "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }}}>
      <CardMedia
        component="img"
        sx={{ height: '40%' }}
        image={image ? `${image}` :`https://source.unsplash.com/featured/?${title}`}
        title={title}
      />
      <CardContent sx={{height:'35%'}}>
        <Typography fontFamily={'nato sans'} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography fontFamily={'nato sans'} variant="caption" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}