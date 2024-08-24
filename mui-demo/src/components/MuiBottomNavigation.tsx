import { Favorite, Home, Person } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'

export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)

  return (
    <BottomNavigation
        sx={{ width: '100%', position: 'absolute', bottom: 0}}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
    >
        <BottomNavigationAction label='home' icon={<Home />} />
        <BottomNavigationAction label='favourite' icon={<Favorite />} />
        <BottomNavigationAction label='profile' icon={<Person />} />
    </BottomNavigation>
  )
}
