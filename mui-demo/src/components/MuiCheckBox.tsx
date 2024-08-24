import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React, { useState } from 'react'

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    console.log(acceptTnC)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const [skills, setSkills] = useState<string[]>([])
    console.log({ skills })
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter(skill => skill != event.target.value))
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel
                label='I accept terms and conditions'
                control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
            />
        </Box>

        <Box>
            <Checkbox
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
                checked={acceptTnC}
                onChange={handleChange}
            />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel
                    label='HTML'
                    value='html'
                    control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />}
                />
                <FormControlLabel
                    label='CSS'
                    value='css'
                    control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
                />
                <FormControlLabel
                    label='JavaScript'
                    value='javascript'
                    control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
