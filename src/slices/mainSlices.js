import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
  currentWall: 1,
  form: {
    doors: 0,
    windows: 0,
    height: 0,
    width: 0
  },

  accumulator: {
    wallsArea: 0,
    paintArea: 0
  }
};

export const mainSlices = createSlice({
  name: 'main',
  initialStates,
  reducers: {
    //State actions (that change dynamically the state - PUSH):
    setCurrentWall: (state, action) => {
      state.currentWall = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setAccumulator: (state, action) => {
      state.accumulator = action.payload;
    }
  }
});

//Selectors (that PULLs the states):
export const selectCurrentWall = (state) => state.main.currentWall;
export const selectForm = (state) => state.main.form;
export const selectAccumulator = (state) => state.main.accumulator;

//Export actions & reducer:
export const { setCurrentWall, setForm, setAccumulator } = mainSlices.actions;
export default mainSlices.reducer;
