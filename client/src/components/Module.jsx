import { Tab, Tabs } from "@mui/material"
import { useState } from "react";

const Module = () => {
  const [value, setValue] = useState("lessons");
  return (
    <Tabs value={value} onChange={(event, newValue) => { setValue(newValue) }}>
      <Tab className="tab" value={"lessons"} label={"Lessons"}></Tab>
      <Tab className="tab" value={"quizzes"} label={"Quizzes"}></Tab>
      <Tab className="tab" value={"exercises"} label={"Exercises"}></Tab>
    </Tabs>
  )
}

export default Module;