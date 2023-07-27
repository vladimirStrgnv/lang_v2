import { IUser } from "./types";

class Api {

    static baseUrl: "http://localhost:2000/"
      
    static createUser = async (userInfo:IUser) =>  {
        try {
            const response = await fetch(`http://localhost:2000/users`, {
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

  
  
  export default Api;