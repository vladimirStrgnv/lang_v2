import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInState, authData } from './types';
import { Validators } from '../../../../../shared/utils/services/validators';

const authData = localStorage.getItem('authData')
  ? JSON.parse(localStorage.getItem('authData'))
  : null;


const initialState: signInState =  {
    email: {
        value: '',
        isValid: true
    },
    password: {
        value: '',
        isValid: true
    },
    authData
}

const signUpSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        inputMail(state, action: PayloadAction<{value: string}>) {
            state.email.value = action.payload.value;
            state.email.isValid = Validators.validateEmail(action.payload.value);
        },
        inputPassword(state, action: PayloadAction<{value: string}>) {
            state.password.value = action.payload.value;
            state.password.isValid = Validators.checkLength(action.payload.value, 5);
        },
        setAuthData(state, action: PayloadAction<{value: authData}>) {
            state.authData = action.payload.value;
            console.log(state.authData)
        }
    },
});


export const {inputMail, inputPassword, setAuthData} = signUpSlice.actions;


export default signUpSlice.reducer;