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
      <Outlet />
    </Box>
  )
}

export default Home;