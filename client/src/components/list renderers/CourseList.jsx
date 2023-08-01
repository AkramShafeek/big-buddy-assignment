import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import ModuleDetails from "../ModuleDetails";
import QuizDetails from "../QuizDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCourse } from "../../redux/features/courseSlice";
import { useTheme } from "@emotion/react";

const CourseList = ({ list, targetDetails }) => {
  const [expanded, setExpanded] = useState("")
  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { palette } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {list.map((element, index) => {
        return (
          <div key={element._id}>
            <Accordion expanded={expanded === index} onChange={() => handleChange(index)}
              sx={{
                backgroundColor: palette.primary.light,
                boxShadow: 'none'
              }}>

              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ boxShadow: 'none' }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 30px', fontWeight: '600', color: palette.primary.main }}>
                  {element.name}
                  <Button variant="contained" sx={{ color: 'white', padding:'12px' }} onClick={() => { dispatch(selectCourse(element)); navigate("manageCourse") }} disableElevation>Manage Course</Button>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Divider sx={{ marginBottom: '20px' }} />
                {targetDetails === "modules" ? <ModuleDetails details={element.modules} /> : ""}
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