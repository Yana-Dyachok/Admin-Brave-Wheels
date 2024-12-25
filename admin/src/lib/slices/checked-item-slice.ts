import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChecked } from 'types/interface';

export interface CheckedItemState {
  checkedItem: IChecked[];
}

const initialState: CheckedItemState = {
  checkedItem: [],
};

const checkedItemSlice = createSlice({
  name: 'checked',
  initialState,
  reducers: {
    toggleComplete(state, action: PayloadAction<IChecked>) {
      const { id, checked } = action.payload;
      const existingItemIndex = state.checkedItem.findIndex(
        (item) => item.id === id,
      );

      if (checked) {
        if (existingItemIndex === -1) {
          state.checkedItem.push({ id, checked });
        }
      } else {
        if (existingItemIndex !== -1) {
          state.checkedItem.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const { toggleComplete } = checkedItemSlice.actions;
export default checkedItemSlice.reducer;
