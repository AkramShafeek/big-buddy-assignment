import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Enrollments from "../components/Enrollments";
import CourseModules from "../components/CourseModules";
import CourseProgress from "../components/CourseProgress";

const ManageCourse = () => {
  const [value, setValue] = useState("enrollments");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      backgroundColor: 'aliceblue',
      borderRadius: '10px',
      padding: '20px 10px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <Paper sx={{
        width: "100%",
        backgroundColor: 'beige',
        padding: '10px 20px',
        boxSizing: 'border-box',
        borderRadius: '10px'
      }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab className="tab" value={"enrollments"} label="Enrollments"></Tab>
          <Tab className="tab" value={"course modules"} label="Course modules"></Tab>
          <Tab className="tab" value={"course progress"} label="Course progress"></Tab>
        </Tabs>
      </Paper>

      <Box sx={{
        width: "100%",
        backgroundColor: 'beige',
        padding: '10px 20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        height: '65vh',
        overflowY: 'scroll'
      }}>
        {value === "enrollments" && <Enrollments />}
        {value === "course modules" && <CourseModules />}
        {value === "course progress" && <CourseProgress />}
      </Box>
    </Box>
  )
}

export default ManageCourse;