export type signUpState = {
    email: {
        value: string,
        isValid: boolean
    },
    userName: {
        value: string,
        isValid: boolean
    },
    password:{
        value: string,
        isValid: boolean
    },
    repeatPassword: {
        value: string,
        isValid: boolean
    }
}