import { Link, Stack } from '@mui/material'
import React from 'react'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
        <Link href='#' variant='h6'>Link</Link>
        <Link href='#' color={'secondary'} variant='h6' underline='hover'>Secondary</Link>
    </Stack>
  )
}
