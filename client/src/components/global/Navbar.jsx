import { useTheme } from "@emotion/react";
import { Box, Paper } from "@mui/material";

const Navbar = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{
      width: '100%',
      height: '95px',
      backgroundColor: palette.background.alt,
      borderRadius: '10px'      
    }}>

    </Box>
  )
}

export default Navbar;