import { Box, IconButton } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { DeleteRounded } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const QuizList = (props) => {
  const { list } = props;
  const { palette } = useTheme();
  return (
    <>
      {list?.map((element, index) => {
        return (<Box key={index} sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px 20px',
          boxSizing: 'border-box',
          borderRadius: '6px',
          backgroundColor: index % 2 === 0 && palette.neutral.light,
        }}>
          <Box sx={{
            width: '100%',
            borderRadius: '6px',
            padding: '10px',
            boxSizing: 'border-box',
          }}>
            {element.name}
          </Box>
          <IconButton>
            <EditRoundedIcon color="primary" />
          </IconButton>
          <IconButton>
            <DeleteRounded color="error" />
          </IconButton>
        </Box>)
      })}
      {list.length === 0 && <div>No quizzes</div>}
    </>
  )
}
QuizList.defaultProps = {
  list: []
}
export default QuizList;