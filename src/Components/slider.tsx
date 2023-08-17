import React, { useState } from 'react'
import Settings, { DefaultSettingsT, SettingsT } from './settings'
import Carousel from 'react-material-ui-carousel'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@mui/material'


const Slider = () => {

    const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT)

    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            {/* <Typography variant='h4'>Example: eBay&trade style</Typography> */}
            <br/>
            <Carousel
                className="Example"
                {...settings}
                // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                
                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                // NextIcon='next'
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
            <br/>
            {/* <Settings settings={settings} setSettings={setSettings}/> */}
        </div>
    )
}


type Item = {
    Name: string,
    Caption: string,
    contentPosition: "left" | "right" | "middle",
    Items: {Name: string, Image: string}[]
}

interface BannerProps
{
    item: Item,
    contentPosition: "left" | "right" | "middle",
    length?: number,

}


const Banner = (props: BannerProps) => {

    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems: number = props.length ? props.length : 3
    const mediaLength = totalItems - 1

    let items = []
    const content = (
        <Grid item xs={4} sx={{height:'50vh', backgroundColor:'rgb(31 31 31)', color:'white'}} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    Book Free Trial Classes
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i]

        const media = (
            <Grid item xs={4} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                    sx={{height:'100%'}}
                >
                    <Typography variant='body1' sx={{color:'white', backgroundColor:'rgb(4 4 4 / 35%)'}}  className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media)
    }

    if (contentPosition === "left") {
        items.unshift(content)
    } else if (contentPosition === "right") {
        items.push(content)
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content)
    }

    return (
        <Card raised className="Banner" sx={{width:'100%'}}>
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items: Item[] = [
    {
        Name: "Yoga",
        Caption: "Cultivate Inner Peace and Inner Strength through Yoga",
        contentPosition: "left",
        Items: [
            {
                Name: "Elevate Your Well-being with our Yoga Classes",
                Image: "https://source.unsplash.com/featured/?yoga"
            },
            {
                Name: "Nurture Your Mind, Body, and Soul through Yoga",
                Image: "https://source.unsplash.com/featured/?yoga,Nature"
            }
        ]
    },
    {
        Name: "Meditation",
        Caption: "Experience the Healing Power of Meditation",
        contentPosition: "middle",
        Items: [
            {
                Name: "Unlock Your Mind's Potential with Meditation Classes",
                Image: "https://source.unsplash.com/featured/?Meditation"
            },
            {
                Name: "Cultivate Mindfulness and Reduce Stress with Meditation",
                Image: "https://source.unsplash.com/featured/?Meditation,stress"
            }
        ]
    },
    {
        Name: "Acupressure",
        Caption: "Nurture Your Health and Vitality with Acupressure Techniques",
        contentPosition: "right",
        Items: [
            {
                Name: "Balance Energy and Promote Wellness with Acupressure Classes",
                Image: "https://source.unsplash.com/featured/?power,yoga"
            },
            {
                Name: "Floral Vase",
                Image: "https://source.unsplash.com/featured/?acupressure,Power,yoga"
            }
        ]
    },
    {
        Name: "Yoga",
        Caption: "Unleash Your Inner Strength through Yoga",
        contentPosition: "right",
        Items: [
            {
                Name: "Living Room Lamp",
                Image: '/yoga2.jpeg'
            },
            {
                Name: "Floral Vase",
                Image: '/yoga3.jpeg',
            }
        ]
    }
]


export default Slider