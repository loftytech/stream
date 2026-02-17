import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: {state: CreateAppInterface} = {
  state: {
    addSiteModal: false,
    showSubScriptionModal: false,
    showPaymentMethodModal: false,
    showPaystackModal: false,
    showStripeModal: false,
    selectedPaymentMethod: "none",
    paymentReference: "",
    stripeClientSecret: "",
    selectedPlan: null,
    selectedPlanId: null
  }
};

export const creatAppSlice = createSlice({
  name: 'createApp',
  initialState,
  reducers: {
    updateCreatAppState: (state, action: PayloadAction<CreateAppInterface>) => {
      state.state = {...state.state, ...action.payload};

    },
  },
});

export const { updateCreatAppState } = creatAppSlice.actions;

interface CreateAppInterface {
  addSiteModal: boolean
  showPaystackModal: boolean
  showStripeModal: boolean
  showSubScriptionModal: boolean
  showPaymentMethodModal: boolean
  selectedPaymentMethod: string
  paymentReference: string
  stripeClientSecret: string
  selectedPlan: any
  selectedPlanId: any
}

export default creatAppSlice.reducer;
