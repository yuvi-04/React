import { Favorite, FavoriteBorder, Loyalty, Mail } from '@mui/icons-material'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#FFFDD0' }}>
        <List sx={{ color: '#FC0FC0'}}>
            <ListItem disablePadding>
                <ListItemButton href='https://drive.google.com/file/d/104t4jntNo5nQwyGTZtS0T57iOTf7-QZp/view?usp=drive_link'>
                    <ListItemIcon>
                        <Favorite color='error' />
                    </ListItemIcon>
                    <ListItemText secondary='Click me!!'>{<Typography variant='h5'>Deleted One</Typography>}</ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton href='https://drive.google.com/file/d/1cW33XPgMqosbaOwI6X4Httu2l0EKLYEq/view?usp=drive_link'>
                <ListItemIcon>
                    <FavoriteBorder color='error' />
                </ListItemIcon>
                <ListItemText secondary='Click me!!'>{<Typography variant='h5'>Favourite One</Typography>}</ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton href='https://drive.google.com/file/d/13A0Xcy5pBTNjhtBCQ1LRZ3uPU7TrHEQz/view?usp=drive_link'>
                <ListItemIcon>
                    <Loyalty color='error' />
                </ListItemIcon>
                <ListItemText secondary='Click Me!!'>{<Typography variant='h5'>hottii</Typography>}</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}
