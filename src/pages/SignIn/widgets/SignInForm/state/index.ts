import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUpState } from './types';
import { Validators } from '../../../../../shared/utils/services/validators';

const initialState: signUpState =  {
    email: {
        value: '',
        isValid: true
    },
    password: {
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
        inputPassword(state, action: PayloadAction<{value: string}>) {
            state.password.value = action.payload.value;
            state.password.isValid = Validators.checkLength(action.payload.value, 5);
        }
    },
});


export const {inputMail, inputPassword} = signUpSlice.actions;


export default signUpSlice.reducer;