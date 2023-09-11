import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUpState } from './types';
import { Validators } from '../../../../../shared/utils/services/validators';

const initialState: signUpState =  {
    email: {
        value: '',
        isValid: true
    },
    userName: {
        value: '',
        isValid: true
    },
    password: {
        value: '',
        isValid: true
    },
    repeatPassword: {
        value: '',
        isValid: true
    }

}

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        inputMail(state, action: PayloadAction<{value: string}>) {
            state.email.value = action.payload.value;
            state.email.isValid = Validators.validateEmail(action.payload.value);
        },
        inputUserName(state, action: PayloadAction<{value: string}>) {
            state.userName.value = action.payload.value;
            state.userName.isValid = Validators.checkLength(action.payload.value, 5);
        },
        inputPassword(state, action: PayloadAction<{value: string}>) {
            state.password.value = action.payload.value;
            state.password.isValid = Validators.checkLength(action.payload.value, 5);
        },
        inputrepeatPassword(state, action: PayloadAction<{value: string}>) {
            state.repeatPassword.value = action.payload.value;
            state.repeatPassword.isValid = state.password.value === action.payload.value;
        }
    },
});


export const {inputMail, inputUserName, inputPassword, inputrepeatPassword} = signUpSlice.actions;


export default signUpSlice.reducer;