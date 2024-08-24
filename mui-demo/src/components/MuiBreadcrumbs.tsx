import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNext fontSize='small' />}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catelog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color={'text.primary'}>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
