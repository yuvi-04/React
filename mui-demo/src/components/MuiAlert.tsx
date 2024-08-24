import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import React from 'react'

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>This an error Alert</Alert>
        <Alert severity='warning'>This an warning Alert</Alert>
        <Alert severity='info'>This an info Alert</Alert>
        <Alert severity='success'>This an success Alert</Alert>

        <Alert variant='filled' severity='error'>
            <AlertTitle>Error</AlertTitle>
            An error has occured
        </Alert>
        <Alert severity='warning'>
            <AlertTitle>Warning</AlertTitle>
            Warning
        </Alert>
        <Alert variant='outlined' severity='info'>
            <AlertTitle>Info</AlertTitle>
            Info about
        </Alert>
        <Alert variant='outlined' severity='success' action={<Button size='small' color='inherit'>UNDO</Button>}>
            <AlertTitle>Success</AlertTitle>
            Successful
        </Alert>
    </Stack>
  )
}
