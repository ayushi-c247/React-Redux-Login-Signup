import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";

const register = (firstName, lastName,email, password) => {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      email,
      password,
    });
  };

//   const login = ( email, password) => {
//     return axios.post(API_URL + "signup", {
//       email,
//       password,
//     }).then((response)=>{
//         if (reponse.data.token) {
//             localStorage.setItem("user",JSON.stringify(response.data))
//         }
//        return reponse.data

//     })
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//   };
  
  export default {
    register,
    // login,
    // logout,
  };