import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: {state: WalletSliceInterface} = {
  state: {
    showPaymentMethodModal: false,
    isVerifyingTransaction: false,
    showPaystackModal: false,
    showStripeModal: false,
    selectedPaymentMethod: "none",
    paymentReference: "",
    stripeClientSecret: "",
    selectedPlan: null
  }
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateWalletState: (state, action: PayloadAction<WalletSliceInterface>) => {
      state.state = {...state.state, ...action.payload};

    },
  },
});

export const { updateWalletState } = walletSlice.actions;

interface WalletSliceInterface {
  isVerifyingTransaction: boolean
  showPaystackModal: boolean
  showStripeModal: boolean
  showPaymentMethodModal: boolean
  selectedPaymentMethod: string
  paymentReference: string
  stripeClientSecret: string
  selectedPlan: any
}

export default walletSlice.reducer;
