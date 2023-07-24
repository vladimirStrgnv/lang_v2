import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        email: '',
        userName: '',
        password: '',
        repeatPassword: ''

    },
    reducers: {
        inputMail(state, action) {

        }
    },
});


export const {inputMail} = signUpSlice.actions;


export default signUpSlice.reducer;