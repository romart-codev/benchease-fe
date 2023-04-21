import axios from "axios";
const API_URL = "http://localhost:8180/oauth/token";
class AuthService {
  login(user: { username: any; password: any }) {
    return axios
      .post(API_URL, {
        username: "admin@sample.com",
        password: "sample",
        client_id: "98f91eda-a870-4ef4-9cf3-9cb1e6a88c92",
        client_secret: "v8Ytlyf7P9tSB6c96TnVn4qWwwnCSy5FNU9bLOsX",
        grant_type: "password",
        scope: "",
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user: { username: any; email: any; password: any }) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
