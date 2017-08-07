// actions.js
import request from "superagent";
import Cookies from "js-cookie";
export const SET_TOKEN = "SET_TOKEN";
export const SET_ERROR = "SET_ERROR";

const makeActionCreator = function(actionType) {
  return function(payload) {
    return { type: actionType, payload: payload };
  };
};

const setToken = makeActionCreator(SET_TOKEN);
const setError = makeActionCreator(SET_ERROR);

const baseURL = "https://user-auth-test.herokuapp.com";
const api = path => baseURL + path;

export const login = (email, password) => {
  return dispatch => {
    console.log("action workingggggg")
    request
      .post(api("/login"))
      .send({ email: email, password: password })
      .end((err, res) => {
        if (err) {
          return dispatch(setError(res.body.errors));
        } else {
          dispatch(setError(null));
        }
        dispatch(setToken(res.body["auth_token"]));
        Cookies.set("token", res.body["auth_token"], { expires: 7 });
      });
  };
};

// const getDashboard = token => {
//   return (dispatch, getState) => {
//     request
//       .get(api("/dashboard"))
//       .set("X-AUTH-TOKEN", getState()["token"])
//       .end((err, res) => {
//         if (err) {
//           return dispatch(setError(res.body.errors));
//         } else {
//           dispatch(
//             setUser({
//               email: res.body.email,
//               full_name: res.body.full_name,
//               message: res.body.message
//             })
//           );
//         }
//       });
//   };
// };

export const loadTokenFromCookie = () => {
    console.log(":::::")
  return dispatch => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(setToken(token));
    //   dispatch(getDashboard());
    }
  };
};
