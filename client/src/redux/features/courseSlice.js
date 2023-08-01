import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: [],
  selectedCourse: null
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    loadCourse: (state, action) => {
      state.courseList = action.payload
    },
    selectCourse: (state, action) => {
      state.selectedCourse = action.payload;      
    }
  }
});

export const { loadCourse, selectCourse } = courseSlice.actions;
export default courseSlice.reducer;

