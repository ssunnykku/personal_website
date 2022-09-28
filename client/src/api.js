// import axios from "axios";

// const backendPortNumber = "5000";
// const serverUrl =
//   "http://" + window.location.hostname + ":" + backendPortNumber + "/";

// async function get(endpoint, params = "") {
//   console.log(
//     `%cGET 요청 ${serverUrl + endpoint + "/" + params}`,
//     "color: #a25cd1;"
//   );

//   return axios.get(serverUrl + endpoint + "/" + params, {
//     // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
//     headers: {
//       Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
//     },
//   });
// }

// export { get, post, put, del as delete };
