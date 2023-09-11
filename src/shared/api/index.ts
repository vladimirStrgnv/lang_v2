import dayjs from "dayjs";
import { BASE_SERVER_URL } from "../const";
class Api {
  baseUrl: string;
  storeSubscription: any;
  refreshToken: string;
  token: string;
  userId: string;
  state: any;

  constructor(auth) {
    this.baseUrl = BASE_SERVER_URL;
    this.state = auth;
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
      const response = await fetch(`${BASE_SERVER_URL}signin`, {
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
      const authData = await response.json();
      const userStat = await this.getStatistics(authData.userId, authData.token);
      if (!userStat) {
        await this.updateStatistics(
          {
            optional: {
              allTime: {
                learned: 0,
                studied:0,
                difficult: 0
              },
              days: {
                [dayjs().format("DD:MM:YYYY")]: {
                  learned: 0,
                  studied: 0,
                  difficult: 0
                }
              }

            },
          },
          authData.userId,
          authData.token
        );
      }
      return authData;
    } catch (err) {
      return null;
    }
  };

  getWords = async (group, page) => {
    try {
      const response = await fetch(
        `${this.baseUrl}words/?group=${group}&page=${page}`
      );
      const data = await response.json();
      const result = {
        words: data,
      };
      return result;
    } catch (err) {
      const result = {
        count: 0,
        words: [],
      };
      return result;
    }
  };

  getAggregatedWords = async (
    section,
    page,
    wordsPerPage = 20,
    filterParams = ""
  ) => {
    try {
      const filter = filterParams
        ? `%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22${filterParams}%22%7D%5D%7D`
        : "";
      const response = await fetch(
        `${this.baseUrl}users/${this.state.userId}/aggregatedWords?group=${section}&page=${page}&wordsPerPage=${wordsPerPage}&filter=${filter}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.state.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const result = {
        count: data[0].totalCount[0].count,
        words: data[0].paginatedResults.map((word) => {
          return { ...word, id: word._id };
        }),
      };

      return result;
    } catch (err) {
      const result = {
        count: 0,
        words: [],
      };
      return result;
    }
  };

  createUserWord = async (wordId, options) => {
    const response = await fetch(
      `${this.baseUrl}users/${this.state.userId}/words/${wordId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      }
    );
    const data = await response.json();
    return data;
  };

  deleteUserWord = async (wordId) => {
    const response = await fetch(
      `${this.baseUrl}users/${this.state.userId}/words/${wordId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  };

  getUserWord = async (wordId) => {
    const response = await fetch(
      `${this.baseUrl}users/${this.state.userId}/words/${wordId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const word = await response.json();
    return {...word, id: word.wordId};
  };

  updateUserWord = async (
    wordId: string,
    body
  ) => {
    const response = await fetch(
      `${this.baseUrl}users/${this.state.userId}/words/${wordId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return data;
  };

  getStatistics = async (userId?, token?) => {
    const response = await fetch(
      `${this.baseUrl}users/${this.state?.userId?this.state?.userId:userId}/statistics`,
      {
        headers: {
          method: "GET",
          Authorization: `Bearer ${this.state?.token?this.state?.token:token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(444)
    if (response.ok) {
      return response.json();
    } else {
      return null;
    }
  };

  updateStatistics = async (body, userId?, token?) => {
    try {
      await fetch(`${this.baseUrl}users/${this.state?.userId?this.state?.userId:userId}/statistics`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${this.state?.token?this.state?.token:token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      return null;
    }
  };
}
 
export default Api;