import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    console.log({ country })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }

  return (
    <Box width='150px'>
        <TextField
            label='Select Country'
            select value={country}
            onChange={handleChange}
            fullWidth
            // SelectProps={{
            //     multiple: true
            // }}
        >
            <MenuItem value='IN' >India</MenuItem>
            <MenuItem value='US' >USA</MenuItem>
            <MenuItem value='AUS' >Australia</MenuItem>
        </TextField>
    </Box>
  )
}
