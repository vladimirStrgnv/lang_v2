import { IUser } from "./types";
import store from "../stores";

class Api {
  baseUrl: string;
  storeSubscription: any;
  refreshToken: string;
  token: string;
  userId: string;
  state: any;

  constructor(auth) {
    this.baseUrl = "http://localhost:2000/";
    this.state = auth;
    console.log(store.getState())
    this.token = '';
    this.userId = '';
    this.refreshToken = '';


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
    try {
      const filter = `%7B%22$and%22%3A%5B%7B%22group%22%3A${section}%7D%2C%7B%22page%22%3A${page}%7D%5D%7D`;
      const response = await fetch(`${this.baseUrl}users/${this.state.userId}/aggregatedWords?wordsPerPage=${wordsPerPage}&filter=${filter}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data[0].paginatedResults.map(word => {return {...word, id: word._id}} );
    } catch (e) {
      console.log(e);
    }
  }

  createUserWord = async (wordId, difficulty = '' ) => {
    const response = await fetch(`${this.baseUrl}users/${this.state.userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({difficulty: difficulty}),
    });
    const data = await response.json();
    return data;
  }


}

  
  
export default Api;