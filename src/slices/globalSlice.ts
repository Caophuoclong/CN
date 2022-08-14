import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@app/store';

// Define a type for the slice state
interface GlobalState {
  accessToken: string;
}

// Define the initial state using that type
const initialState: GlobalState = {
  accessToken: '',
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccessToken: (state: GlobalState, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
  },
});

export const {setAccessToken} = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default globalSlice.reducer;
