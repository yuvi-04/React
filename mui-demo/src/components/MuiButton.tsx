import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

export const MuiButton = () => {
  const [formats,setFormats] = useState<string[]>([])
  console.log({formats})
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats)
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row' >
        <Button variant='text' href='https://google.com' size='small' >Text</Button>
        <Button variant='contained' size='medium' >Contained</Button>
        <Button variant='outlined' size='large'>Outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />} >Send</Button>
        <Button variant='contained' endIcon={<SendIcon />} >Send</Button>
        <IconButton aria-label='send' color='success' size='small'>
         <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small' color='secondary'
          aria-label='alignment-button'
        >
          <Button>Left</Button>
          <Button>Centre</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction='row'>
        <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleFormatChange}>
          <ToggleButton value='bold' >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}