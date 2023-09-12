import { type } from "os"

export type signInState = {
    email: {
        value: string,
        isValid: boolean
    },
    password:{
        value: string,
        isValid: boolean
    },
    authData: AuthData | null
}

export type AuthData = {
    token: string,
    refreshToken: string,
    userId: string,
    message: string,
    name: string
}