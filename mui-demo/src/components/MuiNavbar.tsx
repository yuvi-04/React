import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

  return (
    <AppBar position='static' color='primary'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemon color='error' />
            </IconButton>
            <Typography variant='h6' component={'div'} sx={{ flexGrow: 1 }}>
                POKEMON APP
            </Typography>
            <Stack direction={'row'} spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button
                    color='inherit'
                    id='resources-button'
                    onClick={handleClick}
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    endIcon={<KeyboardArrowDown />}
                >Reasources</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            <Menu
                id='resources-menu'
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                    'aria-labelledby': 'resources-button'
                }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem>Blog</MenuItem>
                <MenuItem>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}
