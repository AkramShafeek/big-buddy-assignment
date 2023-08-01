import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import { themeSettings } from './theme';
import { ThemeProvider, CssBaseline } from "@mui/material";

import './styles/table.css'
import './styles/misc.css'

import ManageCourse from './pages/ManageCourse';
import { createTheme } from '@mui/material';

function App() {
  const theme = createTheme(themeSettings('light'));
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />}>
            <Route path="" element={<Dashboard />} />
            <Route path="manageCourse" element={<ManageCourse />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
