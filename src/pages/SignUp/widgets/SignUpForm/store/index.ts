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
            state.email = action.payload.value
            console.log(state.email);

        }
    },
});


export const {inputMail} = signUpSlice.actions;


export default signUpSlice.reducer;