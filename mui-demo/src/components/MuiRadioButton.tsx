import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

  return (
    <Box>
        <FormControl error>
            <FormLabel id='job-experience-group'>
                Years Of Experience
            </FormLabel>
            <RadioGroup
                name='job-experience'
                aria-labelledby='job-experience-group'
                value={value}
                onChange={handleChange}
                row
            >
                <FormControlLabel control={<Radio size='small' color='warning' />}  label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}
