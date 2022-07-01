import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  initialState,
  reducers: {
    //State actions (that change dynamically the state - PUSH):
    setCurrentWall: (state, action) => {
      state.currentWall = action.payload;
    },
    setForm: (state, { payload }) => {
      state.form.doors = Math.floor(payload.doors);
      state.form.windows = Math.floor(payload.windows);
      state.form.height = Number(payload.height);
      state.form.width = Number(payload.width);
    },
    setAccumulator: (state, action) => {
      state.accumulator.wallsArea += action.payload.wallsArea;
      state.accumulator.paintArea += action.payload.paintArea;
    },
    goToNextWall: (state) => {
      if (state.currentWall < 4) {
        state.currentWall += 1;
      }
    },
    resetAll(state) {
      Object.assign(state, initialState);
    }
  }
});

//Selectors (that PULLs the states):
export const selectCurrentWall = (state) => state.main.currentWall;
export const selectForm = (state) => state.main.form;
export const selectAccumulator = (state) => state.main.accumulator;

//Export actions & reducer:
export const {
  setCurrentWall,
  setForm,
  setAccumulator,
  goToNextWall,
  resetAll
} = mainSlices.actions;
export default mainSlices.reducer;
