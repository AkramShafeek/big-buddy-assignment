import { Box, Fab, Typography } from "@mui/material";
import CourseTable from "./CourseTable";
import { useEffect } from "react";
import axios from "axios";
import { rootUrl } from "../api calls/config";
import { useDispatch, useSelector } from "react-redux";
import { loadCourse } from "../redux/features/courseSlice";
import { useTheme } from "@emotion/react";

const Dashboard = () => {
  const token = useSelector((store) => store.user.token);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const fetchCourses = async () => {
    try {
      const url = `${rootUrl}/api/v1/instructor/getCourse`
      const config = {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }
      const response = await axios.get(url, config);
      dispatch(loadCourse(response.data));
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    fetchCourses();
  }, [])
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100%',
      backgroundColor: palette.background.alt,
      borderRadius: '10px',
      padding: '20px 10px',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <Box>
        <CourseTable />
      </Box>
    </Box>
  )
}

export default Dashboard;