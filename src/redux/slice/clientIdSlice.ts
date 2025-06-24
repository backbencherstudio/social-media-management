import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null, 
};

const clientIdSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload; 
    },
  },
});

export const { setId } = clientIdSlice.actions;
export default clientIdSlice.reducer;
