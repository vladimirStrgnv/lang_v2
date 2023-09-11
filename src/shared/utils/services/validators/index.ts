export class Validators {
    static validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static checkLength = (str: string, length: number) => {
        return str.length > length;
    }
}

