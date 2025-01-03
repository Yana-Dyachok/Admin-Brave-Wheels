import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBicycle } from 'types/interface';
import { initialStateBicycle } from 'utils/initial-state-bicycle';

interface CreatedItemState {
  createdItem: IBicycle;
}

const initialState: CreatedItemState = {
  createdItem: initialStateBicycle,
};

const createdItemSlice = createSlice({
  name: 'createdItem',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IBicycle>) {
      state.createdItem = action.payload;
    },
  },
});

export const { addItem } = createdItemSlice.actions;
export default createdItemSlice.reducer;
