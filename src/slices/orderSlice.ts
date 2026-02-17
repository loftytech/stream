import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: {state: AppSliceInterface} = {
  state: {
    resetPassword: {
      otp: "",
      email: ""
    },
  }
};

export const setOrderSlice = createSlice({
  name: 'order',
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

export const { setResetPasswordOtp, setResetPasswordEmail } = setOrderSlice.actions;

export interface AppSliceInterface {
  resetPassword: {
    otp: string
    email: string
  }
}

export default setOrderSlice.reducer;
