import { Box, Button, Collapse, Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Module from "../Module";

const ModulesList = ({ list }) => {
  const [expanded, setExpanded] = useState(-1);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {list.map((element, index) => {
        return (<Box key={index} sx={{
          border: '1px solid grey',
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '10px',
          backgroundColor: 'aliceblue',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>Module {index + 1}</Box>
            <Button onClick={() => setExpanded(expanded === index ? -1 : index)}>{expanded === index ? "Collapse" : "Expand"}</Button>
          </Box>
          <Collapse in={expanded === index} sx={{

          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <Divider />
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-around'
              }}>
                <Button variant="contained" disableElevation>Add Lesson</Button>
                <Button variant="contained" disableElevation>Add Quiz</Button>
                <Button variant="contained" disableElevation>Add Exercise</Button>
                <Button variant="contained" disableElevation>Design Module</Button>
              </Box>
              <Module />
            </Box>
          </Collapse>
        </Box>)
      })}
    </Box>
  )
}

export default ModulesList;