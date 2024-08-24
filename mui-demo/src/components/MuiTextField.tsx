import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='NAME' variant='outlined' />
            <TextField label='NAME' variant='filled' />
            <TextField label='NAME' variant='standard' />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='Password' size='small' color='secondary' type='password' />
            <TextField label='Password' required />
            <TextField label='Password' helperText='Do not Share' />
            <TextField label='Password' size='small' type='password' disabled />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment: <InputAdornment position='start' >$</InputAdornment>
            }} />
            <TextField label='Weight' InputProps={{
                endAdornment: <InputAdornment position='end' >Kg</InputAdornment>
            }} />
            <TextField
                label='Form Input'
                required
                value={value}
                onChange={e => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required' : 'Do not Share'} 
            />
        </Stack>
    </Stack>
  )
}
