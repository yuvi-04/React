import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'

export const MuiAccordian = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMore />}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti, blanditiis incidunt provident magni animi deleniti a cumque, adipisci voluptates, modi voluptate consectetur praesentium eaque doloremque? Earum molestiae inventore eos?</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMore />}
            >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti, blanditiis incidunt provident magni animi deleniti a cumque, adipisci voluptates, modi voluptate consectetur praesentium eaque doloremque? Earum molestiae inventore eos?</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMore />}
            >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti, blanditiis incidunt provident magni animi deleniti a cumque, adipisci voluptates, modi voluptate consectetur praesentium eaque doloremque? Earum molestiae inventore eos?</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
