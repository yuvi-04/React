import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import React from 'react'

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList
            sx={{ width: 6528, height: 4896}}
            cols={3}
            rowHeight={164}
        >
            {
                itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading='lazy'
                        />
                        <ImageListItemBar title={item.title} />
                    </ImageListItem>
                ))  
            }
        </ImageList>
        <ImageList
            sx={{ width: 6528, height: 4896}}
            variant='woven'
            cols={3}
            gap={8}
        >
            {
                itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))  
            }
        </ImageList>
        <Box sx={{ width: 6528, height: 4896, overflowY: 'scroll'}}>
        <ImageList
            variant='masonry'
            cols={3}
            gap={8}
        >
            {
                itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))  
            }
        </ImageList>
        </Box>
    </Stack>
  )
}
const itemData = [
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    },
    {
        img: "C:\\Users\\yuvraj\\Desktop\\56812.jpg",
        title: 'pics'
    }
]
