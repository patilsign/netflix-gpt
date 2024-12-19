import { createSlice } from "@reduxjs/toolkit";

const configSLice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    }
  }
});

export const {changeLanguage} = configSLice.actions;
export default configSLice.reducer;