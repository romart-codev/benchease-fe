import axios from "axios";

const API_URL = "http://127.0.0.1:8180/oauth/token";
axios.defaults.baseURL = "/";

class AuthService {
  login(user: { username: any; password: any }) {
    return axios
      .post(API_URL, {
        username: user.username,
        password: user.password,
        client_id: "98f8373e-5f1f-4369-836a-0d6f6b798bb5",
        client_secret: "tt4okbf4YsrXGICxWQIsOCMdk6fztz4m76Y0y7AY",
        grant_type: "password",
        scope: "",
      })
      .then((response) => {
        if (response.data.accessToken) {
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
