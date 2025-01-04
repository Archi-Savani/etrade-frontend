import { createSlice } from "@reduxjs/toolkit";
import { UserLists } from "@/data/Users";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: false,
        userData: {},
    },
    reducers: {
        logIn(state, action) {
            const findUser = UserLists.filter(user => user.email === action.payload);
            if (findUser.length) {
                state.userData = findUser[0];
                state.login = true;
            } 
        }
    }
});

export const { logIn } = authSlice.actions;

export default authSlice.reducer;



