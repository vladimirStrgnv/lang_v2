import { IUser } from "./types";

class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:2000/";
  }

  createUser = async (
    userName: string,
    userEmail: string,
    userPass: string
  ) => {
    try {
      const response = await fetch(`${this.baseUrl}users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPass,
        }),
      });

      return response;
    } catch (err) {
      return err;
    }
  };

  signIn = async (userEmail: string, userPass: string) => {
    try {
      const response = await fetch(`http://localhost:2000/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPass,
        }),
      });
      return response;
    } catch (err) {
      return err;
    }
  };

  getWords = async (group, page) => {
    const response = await fetch(
      `${this.baseUrl}words/?group=${group}&page=${page}`
    );
    const data = await response.json();
    return data;
  };


}

  
  
export default new Api();