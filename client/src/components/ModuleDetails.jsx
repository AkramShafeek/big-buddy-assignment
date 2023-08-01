import { useTheme } from "@emotion/react";
import { Box, Divider, List, Typography } from "@mui/material";

const ModuleDetails = ({ details }) => {
  const { palette } = useTheme();
  return (
    <Box sx={{ padding: '0px 30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant="h6" fontWeight={600}>Modules</Typography>
      {details.map((element, index) => {
        return (
          <Box key={index} sx={{ backgroundColor: palette.background.alt, borderRadius: '5px', padding: '10px' }}>
            {element.name}
          </Box>
        )
      })}
    </Box>
  )
}

export default ModuleDetails;