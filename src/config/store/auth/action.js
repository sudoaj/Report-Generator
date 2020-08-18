import { STORE_TOKEN, STORE_USER, STORE_PROFILE } from "./types";
import {
  LOGIN_USER_ROUTE,
  LOGOUT_USER_ROUTE,
  GET_USER_ROUTE,
  GET_USERPROFILE_ROUTE,
} from "../../utils";

import axios from "axios";
export const storeToken = (token) => (dispatch) =>
  dispatch({ type: STORE_TOKEN, data: token });
export const storeUser = (user) => (dispatch) =>
  dispatch({ type: STORE_USER, data: user });
export const storeUserProfile = (userprofile) => (dispatch) =>
  dispatch({ type: STORE_PROFILE, data: userprofile });

export const loginUser = (email, password, callback) => (dispatch) => {
  axios({
    method: "post",
    url: LOGIN_USER_ROUTE,
    headers: {
      // Authorization: "Token",
    },
    data: { email: email, password: password },
  })
    .then(function (response) {
      if (response.status == 200) {
        dispatch(storeToken(response.data.key));
        dispatch(
          getUser(response.data.key, () => {
            dispatch(
              getUserProfile(response.data.key, () => {
                callback();
              })
            );

            console.log("the user is here ");
          })
        );
        console.log("logged in");
      } else {
        console.log(response.status);
        console.log("unable to login");
      }
    })
    .catch(function (error) {
      console.log("response error===>", error);
    });
};

export const logOutUser = (token, callback) => (dispatch) => {
  axios({
    method: "post",
    url: LOGOUT_USER_ROUTE,
    headers: {
      Authorization: "Token" + token,
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        console.log("logged out", token);
        callback();
      } else {
        console.log(response.status);
        console.log("unable to logout");
      }
    })
    .catch(function (error) {
      console.log("response error===>", error);
    });
};

const getUser = (token, callback) => (dispatch) => {
  axios({
    method: "get",
    url: GET_USER_ROUTE,
    headers: {
      Authorization: "Token " + token,
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        dispatch(storeUser(response.data));
        console.log("user stored");
        callback();
      } else {
        console.log(response.status);
        console.log("unable to get user");
      }
    })
    .catch(function (error) {
      console.log("Catched Error", error);
    });
};

const getUserProfile = (token, callback) => (dispatch) => {
  axios({
    method: "get",
    url: GET_USERPROFILE_ROUTE,
    headers: {
      Authorization: "Token " + token,
    },
  })
    .then(function (response) {
      if (response.status == 200) {
        console.log(response.data);
        dispatch(storeUserProfile(response.data));
        console.log("userprofile stored");
        callback();
      } else {
        console.log(response.status);
        console.log("unable to get user");
      }
    })
    .catch(function (error) {
      console.log("Catched Error for profile", error);
    });
};
