import React from "react";
import { useState } from "react";
import { axiosInstance } from "../axios/login";
export default function Login() {

  const urlParams = new URLSearchParams(window.location.search);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Get the values of 'code' and 'state' parameters
  const code = urlParams.get('code');
  const provider = urlParams.get('state');

  function handleChange(e) {
    const { name, value } = e.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleFacebookSubmit(e) {
    e.preventDefault()
    try {
      const response = await axiosInstance.post("/api/login/social/jwt-pair/", {
        code: code,
        provider: provider,
      });
      console.log(response.data)
    } catch (error) {
     console.log(error) 
    }
  }

  return (
    <form>
      <input type="text" name="username" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange} />
      <button type="submit" onClick={handleFacebookSubmit}>
        submit
      </button>
      <a href="https://www.facebook.com/v19.0/dialog/oauth?client_id=924328569078395&redirect_uri=http://localhost:3000/&state={facebook}">
        Login with Facebook
      </a>
      <button type="submit" onSubmit={handleFacebookSubmit}>login with facebook</button>
    </form>
  );
}
