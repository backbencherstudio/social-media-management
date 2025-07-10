import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the service object type
interface PaymentService {
  name: string;
  price: number;
  serviceId: string;
  serviceTierId: string;
}

interface PaymentState {
  services: PaymentService[];
}

const initialState: PaymentState = {
  services: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    payment: (state, action: PayloadAction<PaymentService>) => {
      state.services.push(action.payload);
    },
  },
});

export const { payment } = paymentSlice.actions;
export default paymentSlice.reducer;
