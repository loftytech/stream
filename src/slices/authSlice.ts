import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: {state: AppSliceInterface} = {
  state: {
    resetPassword: {
      otp: "",
      email: ""
    },
  }
};

export const setAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setResetPasswordOtp: (state, action: PayloadAction<string>) => {
      state.state.resetPassword.otp = action.payload;
    },
    setResetPasswordEmail: (state, action: PayloadAction<string>) => {
      state.state.resetPassword.email = action.payload;
    },
  },
});

export const { setResetPasswordOtp, setResetPasswordEmail } = setAuthSlice.actions;

export interface AppSliceInterface {
  resetPassword: {
    otp: string
    email: string
  }
}

export default setAuthSlice.reducer;
