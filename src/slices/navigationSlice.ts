import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  state: {
    main: false,
    dashboard: false
  }
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.state = {...state.state, ...action.payload};
    },
  },
});

export const {setNavigation} = navigationSlice.actions;

export default navigationSlice.reducer;
