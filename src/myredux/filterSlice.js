import { createSlice } from '@reduxjs/toolkit';

const initailFilterState = {
  text: '',
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initailFilterState,
  reducers: {
    setFilter(state, action) {
      state.text = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
