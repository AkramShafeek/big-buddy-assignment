import { useTheme } from "@emotion/react";
import { Avatar, Box, Paper, Switch } from "@mui/material";
import bigbuddylogo from "../../assets/bigbuddyailogo.png"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{
      width: '100%',
      height: '95px',
      backgroundColor: palette.background.alt,
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0px 30px 0px 20px'
    }}>
      <Box sx={{ height: '80%', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img src={bigbuddylogo} alt="logo" style={{ height: '100%', mixBlendMode: 'multiply', filter: 'contrast(1)' }} />
        <NavLink to="/home" style={{ color: palette.primary.main, textTransform: "uppercase", textDecoration: 'none', fontWeight: 600 }}>
          Dashboard
        </NavLink>
        <NavLink to="" style={{ color: palette.primary.main, textTransform: "uppercase", textDecoration: 'none', fontWeight: 600 }}>
          Courses
        </NavLink>
        <NavLink to="" style={{ color: palette.primary.main, textTransform: "uppercase", textDecoration: 'none', fontWeight: 600 }}>
          Quiz
        </NavLink>
      </Box>
      <Box>        
        <Avatar></Avatar>
      </Box>
    </Box>
  )
}

export default Navbar;