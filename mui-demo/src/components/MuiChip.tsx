import { Face } from '@mui/icons-material'
import { Avatar, Chip, Stack } from '@mui/material'
import React from 'react'

export const MuiChip = () => {
  return (
    <Stack direction={'row'} spacing={1}>
        <Chip label='chip' color='primary' size='small' icon={<Face />} />
        <Chip
            label='chip Outlined'
            color='secondary'
            size='small'
            variant='outlined'
            avatar={<Avatar>V</Avatar>}
        />
        <Chip label='click' color='success' onClick={() => alert('Clicked')} />
        <Chip
            label='Delete'
            color='error'
            onClick={() => alert('Clicked')}
            onDelete={() => alert('Delet Handler')}
        />
    </Stack>
  )
}
