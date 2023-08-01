import { Box, Paper, Tab, Tabs, selectClasses } from "@mui/material";
import { useEffect, useState } from "react";
import Enrollments from "../components/Enrollments";
import CourseModules from "../components/CourseModules";
import CourseProgress from "../components/CourseProgress";
import { useDispatch } from "react-redux";
import { selectCourse } from "../redux/features/courseSlice";
import { useTheme } from "@emotion/react";

const ManageCourse = () => {
  const [value, setValue] = useState("enrollments");
  const dispatch = useDispatch()
  const { palette } = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <Paper sx={{
        width: "100%",
        backgroundColor: palette.primary.main,
        padding: '10px 20px',
        boxSizing: 'border-box',
        borderRadius: '10px'
      }}>
        <Tabs value={value} onChange={handleChange} centered TabIndicatorProps={{
          style: { background: "white", color: "white" }
        }} sx={{ ".Mui-selected": { color: 'white' } }}>
          <Tab className="tab" value={"enrollments"} label="Enrollments" sx={{
            color: palette.primary.light, fontWeight: '600',
            '&.Mui-selected': { color: 'white' }
          }}></Tab>
          <Tab className="tab" value={"course modules"} label="Course modules" sx={{
            color: palette.primary.light, fontWeight: '600',
            '&.Mui-selected': { color: 'white' }
          }}></Tab>
          <Tab className="tab" value={"course progress"} label="Course progress" sx={{
            color: palette.primary.light, fontWeight: '600',
            '&.Mui-selected': { color: 'white' }
          }}></Tab>
        </Tabs>
      </Paper>

      <Box sx={{
        width: "100%",
        backgroundColor: palette.background.alt,
        padding: '10px 20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        minHeight: '65vh',        
      }}>
        {value === "enrollments" && <Enrollments />}
        {value === "course modules" && <CourseModules />}
        {value === "course progress" && <CourseProgress />}
      </Box>
    </Box>
  )
}

export default ManageCourse;