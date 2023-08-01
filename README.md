# Setting up the frontend

Run npm install in the client folder to install the dependencies

# Setting up the server

Run npm install in the server folder to install the dependencies

# Running the frontend

Run npm start in the client directory to run the frontend

# Running the backend

Run npm start to start nodemon in the server directory 

# Setting up the environment variables

## The environment variables used are:

### PORT
### MONGO_URI
### JWT_STUDENT_SIGN
### JWT_INSTRUCTOR_SIGN

Make sure to set all the environment variables before starting the server
It is preferred to set the port as 4000 as it has been configured in the frontend 

If you want to run the server on a different port, kindly change the rooturl in the frontend

path: client/src/api calls/config.js

# API ENDPOINTS

### api/v1/auth/instructor/signup
### api/v1/auth/instructor/login
### api/v1/auth/student/signup
### api/v1/auth/student/login
---------------
### api/v1/instructor/addCourse
### api/v1/instructor/editCourse
### api/v1/instructor/deleteCourse
### api/v1/instructor/getCourse
---------------
### api/v1/instructor/addModule
### api/v1/instructor/editModule
### api/v1/instructor/deleteModule
### api/v1/instructor/getModule
---------------
### api/v1/instructor/addLesson
### api/v1/instructor/editLesson
### api/v1/instructor/deleteLesson
### api/v1/instructor/getLesson
---------------
### api/v1/instructor/addQuiz
### api/v1/instructor/editQuiz
### api/v1/instructor/deleteQuiz
### api/v1/instructor/getQuiz
