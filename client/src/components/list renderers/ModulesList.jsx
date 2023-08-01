import { Box, Button, Collapse, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Module from "../Module";
import { useTheme } from "@emotion/react";

const ModulesList = ({ list }) => {
  const [expanded, setExpanded] = useState(-1);
  const { palette } = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {list.map((element, index) => {
        return (<Box key={index} sx={{
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '10px',
          backgroundColor: palette.primary.light,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 30px', alignItems: 'center' }}>
            <Box><Typography variant="h5" fontWeight="600"> {element.name} </Typography></Box>
            <Button onClick={() => setExpanded(expanded === index ? -1 : index)}>{expanded === index ? "Collapse" : "Expand"}</Button>
          </Box>
          <Collapse in={expanded === index}>
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
              <Module module={element} />
            </Box>
          </Collapse>
          {/* <Divider /> */}
        </Box>)
      })}
    </Box>
  )
}

export default ModulesList;