import { IUser } from "./types";
import store from "../stores";

class Api {
  baseUrl: string;
  storeSubscription: any;
  refreshToken: string;
  token: string;
  userId: string;
  state: any;

  constructor(store) {
    this.baseUrl = "http://localhost:2000/";
    this.state = store.getState();
    this.token = '';
    this.userId = '';
    this.refreshToken = '';

    this.storeSubscription = store.subscribe(()=> {
      const authData = store.getState().signIn.authData;
      if (authData) {
      this.refreshToken = authData.refreshToken
      this.token = authData.token
      this.userId = authData.userId
      this.state = store.getState();
    }
    })
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
    try {
      const response = await fetch(
        `${this.baseUrl}words/?group=${group}&page=${page}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return [];
    }
  };

  getAggregatedWords = async (section, page, wordsPerPage = 20) => {
    console.log(this.state.signIn.authData.token)
    try {
      const filter = `%7B%22$and%22%3A%5B%7B%22group%22%3A${section}%7D%2C%7B%22page%22%3A${page}%7D%5D%7D`;
      const response = await fetch(`${this.baseUrl}users/${this.state.signIn.authData.userId}/aggregatedWords?wordsPerPage=${wordsPerPage}&filter=${filter}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.state.signIn.authData.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data)
      return data[0].paginatedResults;
    } catch (e) {
      console.log(e);
    }
  }


}

  
  
export default new Api(store);