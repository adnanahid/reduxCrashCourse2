import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface informationSlice {
  name: string;
  age: number;
}

const initialState: informationSlice = {
  name: "Nahid Hasan",
  age: 22,
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    incrementAge: (state) => {
      state.age += 1;
    },
  },
});

export const { updateName, incrementAge } = informationSlice.actions;
export default informationSlice.reducer;
