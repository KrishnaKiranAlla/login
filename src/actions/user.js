import { LOGIN_USER, USER_DETAILS } from "./types";
// import config from "../config";

function loginUser(data) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://apertum-interview.herokuapp.com/api/user/login/`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const apiResponse = await response.json();
      console.log(apiResponse, "api");
      if (apiResponse.token) {
        return dispatch({
          type: LOGIN_USER,
          payload: apiResponse.token,
        });
      } else {
        return dispatch({
          type: LOGIN_USER,
          payload: apiResponse.error_message,
        });
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
}

function getUserDetails(token) {
  return async (dispatch) => {
    const authorize = `Bearer ${token}`;
    try {
      const response = await fetch(
        `https://apertum-interview.herokuapp.com/api/users`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: authorize,
          },
        }
      );
      const apiResponse = await response.json();
      if (apiResponse) {
        return dispatch({
          type: USER_DETAILS,
          payload: apiResponse,
        });
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
}

export { loginUser, getUserDetails };
