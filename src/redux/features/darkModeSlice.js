import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : localStorage.getItem("darkMode")?
  localStorage.getItem("darkMode") === "true" : false,
};

export const counterSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers:{
    darkModeOn : (state) =>{
      state.value = true;
    },
    darkModeOff : (state)=>{
      state.value= false;
    },
    toogleDrakMode: (state) =>{
      state.value = !state.value;
    },
  },
});  

export const {darkModeOn, darkModeOff, toogleDrakMode} = counterSlice.actions;

export default counterSlice.reducer;