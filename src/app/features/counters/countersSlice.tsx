import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  id: number;
  value: number;
}

const initialState: CounterState[] = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action:PayloadAction<number>)=>{

    },
    decrement: (state, action:PayloadAction<number>)=>{

    }
  }
});
