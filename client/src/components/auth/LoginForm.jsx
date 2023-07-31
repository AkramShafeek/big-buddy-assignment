import { Alert, Box, Button, Collapse, TextField } from "@mui/material";
import { Formik, Form, useField } from "formik"
import { rootUrl } from "../../api calls/config";
import axios from "axios"
import { useState } from "react";
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { setUserInfo } from "../../redux/features/userSlice";

const MyInputText = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        type={props.type}
        label={props.label}
        {...field}
        error={Boolean(meta.touched) && Boolean(meta.error)}
        helperText={meta.touched && meta.error ? meta.error : ""}
        fullWidth
      />
    </>
  )
}

const StudentLoginForm = ({ value }) => {
  const [showStatus, setShowStatus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  }
  const validateSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });

  const instructorLoginUrl = `${rootUrl}/api/v1/auth/instructor/login`;
  const studentLoginUrl = `${rootUrl}/api/v1/auth/student/login`;

  const handleSubmit = async (values) => {
    const apiUrl = value === 0 ? studentLoginUrl : instructorLoginUrl;
    try {
      setIsError(false);
      const response = await axios.post(apiUrl, { ...values });
      console.log(response.data);
      dispatch(setUserInfo(response.data));
    } catch (error) {
      console.log(error.response.data);
      setIsError(true);
      setErrorMsg(error.response.data);
    } finally {
      setShowStatus(true);
      setTimeout(() => {
        setShowStatus(false);
      }, 4000);
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      width: '100%',
      paddingTop: '30px'
    }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}>
        <Form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          width: '100%',
          alignItems: 'center'
        }}>
          <MyInputText name="email" label="email"></MyInputText>
          <MyInputText name="password" type="password" label="password"></MyInputText>
          <Collapse in={showStatus}>
            <Alert severity={isError ? "error" : "success"}>{isError ? errorMsg : "login success"}</Alert>
          </Collapse>
          <Button type="submit" variant="contained" sx={{ width: '50%' }}>LOGIN</Button>
          <Button>Don't have an account? Sign up</Button>
        </Form>
      </Formik>
    </Box>
  )
}

export default StudentLoginForm;