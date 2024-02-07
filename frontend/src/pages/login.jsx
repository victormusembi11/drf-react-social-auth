import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

import { HandleGoogleLogin } from "../axios/google-login";
import { axiosInstance } from "../axios/axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/token/", {
        username: credentials.username,
        password: credentials.password,
        grant_type: "password",
        client_id:
          "541785145737-n1a0n0e914ipg2ug6oliop4ro19f78q2.apps.googleusercontent.com",
        client_secret: "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",
      });
      console.log(response.data);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
    } catch (error) {
      console.log(error);
    }
  }

  const responseMessage = (response) => {
    console.log(response);
    HandleGoogleLogin(response.credential);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <form>
      <input type="text" name="username" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      <a href="https://www.facebook.com/v19.0/dialog/oauth?client_id=906353464279347&redirect_uri=http://localhost:3002/&state={facebook}&response_type=token">
        Login with Facebook
      </a>
    </form>
  );
}
