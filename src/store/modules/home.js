import { getHomeGoodPriceData } from "@/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceRoom: []
  },
  reducer: {
    changeGoodPriceRoomAction(state, { payload }) {
      state.goodPriceRoom = payload;
    }
  }
});

export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  const res = await getHomeGoodPriceData();
  console.log("res:", res);
});

export const { changeGoodPriceRoomAction } = homeSlice.actions;

export default homeSlice.reducer;
