import { useEffect, useState } from "react";
import CourseList from "./list renderers/CourseList";
import { Box, Button, Fab, Typography } from "@mui/material";

const CourseTable = () => {

  const [courses, setCourse] = useState([]);
  const sampleArr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    // fetch the courses here
  }, []);

  return (
    <Box sx={{
      width: '100%',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        <Box className="header">
          <Typography variant={'h5'} fontWeight={600}>
            My Courses
          </Typography>
          <Button variant="contained" color="secondary" disableElevation>Add courses</Button>
        </Box>
        <CourseList list={sampleArr} targetDetails={'quizzes'}/>
      </Box>
    </Box>
  )
}

export default CourseTable;