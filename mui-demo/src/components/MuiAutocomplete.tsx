import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

type Skill = {
    id: number
    label: string
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

const skillOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null)
    console.log({ value })
    const handleChange = (event: any, newValue: string | null) => {
        setValue(newValue)
    }

    const [skill, setSkill] = useState<Skill | null>(null)
    console.log(skill)


  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete
            value={value}
            onChange={handleChange}
            options={skills}
            renderInput={(params) => <TextField {...params} label='skills' />}
            freeSolo
        />
        <Autocomplete
            value={skill}
            onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
            options={skillOption}
            renderInput={(params) => <TextField {...params} label='skills' />}
        />
    </Stack>
  )
}
