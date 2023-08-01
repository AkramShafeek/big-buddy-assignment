import { Accordion, AccordionDetails, AccordionSummary, Box, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import ModuleDetails from "../ModuleDetails";
import QuizDetails from "../QuizDetails";
import { useNavigate } from "react-router-dom";

const CourseList = ({ list, targetDetails }) => {
  const [expanded, setExpanded] = useState("")
  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  }

  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {list.map((element, index) => {
        return (
          <div key={index}>
            <Accordion expanded={expanded === index} onChange={() => handleChange(index)} sx={{ boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ boxShadow: 'none' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0px 40px' }}>
                  {element}
                  <Button variant="contained" onClick={() => { navigate("manageCourse") }} disableElevation>Manage Course</Button>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {targetDetails === "modules" ? <ModuleDetails details={"module details"} /> : ""}
                {targetDetails === "quizzes" ? <QuizDetails details={"quiz details"} /> : ""}
              </AccordionDetails>
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

export default CourseList;