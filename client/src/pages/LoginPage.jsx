import { Box, Button, Divider, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import StudentLoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      gap: '20px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Paper sx={{
        width: '500px',
        minHeight: '60%',
        borderRadius: '10px',
        padding: '30px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <Box>
          BIG BUDDY
        </Box>
        <Divider sx={{ width: '100%' }} />
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label="Student login"></Tab>
          <Tab value={1} label="Instructor login"></Tab>
        </Tabs>

        <StudentLoginForm value={value} />
      </Paper>
    </Box>
  )
}

export default LoginPage;
