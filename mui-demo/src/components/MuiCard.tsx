import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
                component='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash-image' 
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                <Typography variant='body2' color='text.secondary'>
                    React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
