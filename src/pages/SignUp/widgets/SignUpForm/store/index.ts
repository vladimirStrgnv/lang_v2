import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUpState } from './types';

const initialState: signUpState =  {
    email: {
        value: '',
        isValid: ''
    },
    userName: {
        value: '',
        isValid: ''
    },
    password: {
        value: '',
        isValid: ''
    },
    repeatPassword: {
        value: '',
        isValid: ''
    }

}

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        inputMail(state, action: PayloadAction<{value: string}>) {
            state.email = action.payload.value
        },
        inputUserName(state, action: PayloadAction<{value: string}>) {
            state.userName = action.payload.value
        },
        inputPassword(state, action: PayloadAction<{value: string}>) {
            state.password = action.payload.value
        },
        inputrepeatPassword(state, action: PayloadAction<{value: string}>) {
            state.repeatPassword = action.payload.value
        }
    },
});


export const {inputMail, inputUserName, inputPassword, inputrepeatPassword} = signUpSlice.actions;


export default signUpSlice.reducer;