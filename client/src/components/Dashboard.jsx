import { Box, Fab, Typography } from "@mui/material";
import CourseTable from "./CourseTable";

const Dashboard = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',       
      backgroundColor: 'aliceblue',
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