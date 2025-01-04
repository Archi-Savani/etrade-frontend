import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMobileMenuOpen: false,
    },
    reducers: {
        mobileMenu(state, action) {
            state.isMobileMenuOpen = action.payload;
        }
    }
});

export const { mobileMenu } = menuSlice.actions;

export default menuSlice.reducer;



