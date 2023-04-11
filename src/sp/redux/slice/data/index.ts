import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { InterFade_Data_PL } from "@/sp/interfade";

const initialState: InterFade_Data_PL = {};
const Data_PL_Slice = createSlice({
  name: "Data_Public",
  initialState,
  reducers: {},
});

export const {} = Data_PL_Slice.actions;

export const Data_PL_Selector = (state: RootState) => state.Data_PL_Slice;

export default Data_PL_Slice;
