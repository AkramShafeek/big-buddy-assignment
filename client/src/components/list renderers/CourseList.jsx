import { Accordion, AccordionDetails, AccordionSummary, Box, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const CourseList = ({ list }) => {
  const [expanded, setExpanded] = useState("")
  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {list.map((element, index) => {
        return (
          <div key={index}>
            <Accordion expanded={expanded === index} onChange={() => handleChange(index)}sx={{boxShadow:'none'}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{boxShadow:'none'}}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between',padding:'0px 40px' }}>
                  {element}
                  <Button variant="contained" onClick={() => { }} disableElevation>Manage Course</Button>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                Details of courses here
              </AccordionDetails>
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

export default CourseList;