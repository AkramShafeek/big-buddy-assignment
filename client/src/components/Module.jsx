import { Box, Divider, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import LessonList from "./list renderers/LessonList";
import QuizList from "./list renderers/QuizList";
import { useSelector } from "react-redux";

const Module = ({ module }) => {
  const [value, setValue] = useState("lessons");    
  return (
    <Box>
      <Tabs value={value} onChange={(event, newValue) => { setValue(newValue) }}>
        <Tab className="tab" value={"lessons"} label={"Lessons"}></Tab>
        <Tab className="tab" value={"quizzes"} label={"Quizzes"}></Tab>
        <Tab className="tab" value={"exercises"} label={"Exercises"}></Tab>
      </Tabs>
      <Divider />
      <Box sx={{ marginTop: '20px' }}>
        {value === "lessons" && <LessonList list={module.lessons} />}
        {value === "quizzes" && <QuizList list={module.quizzes} />}
      </Box>
    </Box>
  )
}

export default Module;