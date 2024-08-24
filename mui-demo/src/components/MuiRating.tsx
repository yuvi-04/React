import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log({ value })
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
    
  return (
    <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          size='large'
          precision={0.5}
          icon={<Favorite fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorder fontSize='inherit' />}
        />
    </Stack>
  )
}
