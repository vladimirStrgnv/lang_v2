import { IUser } from "./types";

class Api {

    baseUrl: string;

    constructor() {
        this.baseUrl =  "http://localhost:2000/";
    }
      
    createUser = async (userInfo:IUser) =>  {
        try {
            const response = await fetch(`${this.baseUrl}users`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });

            return response;

        } catch (err) {

            return err;

        }
    }
}

  
  
  export default new Api();