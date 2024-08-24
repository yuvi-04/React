import { Mail } from '@mui/icons-material'
import { Badge, Stack } from '@mui/material'
import React from 'react'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={5} color='primary'>
            <Mail></Mail>
        </Badge>
        <Badge badgeContent={100} color='primary' max={999}>
            <Mail></Mail>
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <Mail></Mail>
        </Badge>
    </Stack>
  )
}
