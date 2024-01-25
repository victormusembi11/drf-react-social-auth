import axios from "axios";

export async function HandleGoogleLogin(access_token) {
  try {
    const res = await axios.post("http://localhost:8000/auth/convert-token/", {
      token: access_token,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: "VEfMVnc36ncAj5OjpeFzeHe6xDfbMW2UC8ylTMpN",
      client_secret:
        "lYTL8x6XduXyOGhoVVzB0OvWmvQS4Ll9b199wbS3zQCMb1ht8Og9ca8I3EAKpKXQPbIBMW8ji9V5bkeSpwa8CW3s6Uukohnwgsp6E2rGCrEq91Hjcd5S0uupBvYnbULO",
    });

    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
  } catch (error) {
    console.log(error);
  }
}
