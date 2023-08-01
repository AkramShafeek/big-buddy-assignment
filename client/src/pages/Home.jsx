import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";

const Home = () => {
  return (
    <Box sx={{
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      minHeight: '100%',      
    }}>
      <Navbar />
      <Box sx={{ width: '100%', height: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Home;