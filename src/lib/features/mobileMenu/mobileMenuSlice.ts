import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export interface IMobileMenuState {
  isMenuOpen: boolean;
}

const initialState: IMobileMenuState = {
  isMenuOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      return { isMenuOpen: action.payload };
    },
  },
});

export const { setIsMenuOpen } = mobileMenuSlice.actions;
export const selectIsMenuOpen = (state: RootState) =>
  state.mobileMenu.isMenuOpen;

export default mobileMenuSlice.reducer;
