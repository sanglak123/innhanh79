import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { InterFade_Client, InterFade_Data_Clients } from "@/sp/interfade";

const initialState: InterFade_Data_Clients = {
  Client: {} as InterFade_Client,
  access_token: "",
};
const Clients_Slice = createSlice({
  name: "Clients",
  initialState,
  reducers: {
    Sign_In_Success: (state, action: PayloadAction<any>) => {
      state.Client = action.payload.InterFade_Data_Clients;
      state.access_token = action.payload.access_token;
    },
    Sign_Out_Success: (state, action: PayloadAction<any>) => {
      state.Client = {} as InterFade_Client;
      state.access_token = "";
    },
  },
});

export const { Sign_In_Success } = Clients_Slice.actions;

export const Clients_Selector = {
  Client: (state: RootState) => state.Clients_Slice.Client,
  access_token: (state: RootState) => state.Clients_Slice.access_token,
};

export default Clients_Slice;
