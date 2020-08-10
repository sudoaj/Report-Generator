const fetch = require("node-fetch");

// fetch("http://127.0.0.1:8000/api/rest-auth/user/", {
//   method: "get",
//   headers: new Headers({
//     Authorization: "Token " + btoa("username:password"),
//     "Content-Type": "application/x-www-form-urlencoded",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));



var url = "http://127.0.0.1:8000/api/rest-auth/login/";
var bearer_token = "016b2342599106b43c5e8c3db225a9dd37294ab2";
var bearer = bearer_token;
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    //     Authorization: "Token 016b2342599106b43c5e8c3db225a9dd37294ab2",
  },
  body: JSON.stringify({
    username: "shalam155",
    password: "aj2020!!",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  //   .then((responseJson) => {
  //     var items = JSON.parse(responseJson._bodyInit);
  //   })
  .catch((error) => console.log(error));
