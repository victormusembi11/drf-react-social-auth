import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { removeHashAfterQuestionMark, extractUrlParams } from "../helpers/urls";

export default function AuthCheck() {
  const navigate = useNavigate();
  const urlWithoutHash = removeHashAfterQuestionMark(window.location.href);
  const params = extractUrlParams(urlWithoutHash);

  useEffect(() => {
    async function convertToken() {
      try {
        const res = await axios.post(
          "http://localhost:8000/auth/convert-token",
          {
            grant_type: "convert_token",
            backend: "facebook",
            client_id: "VEfMVnc36ncAj5OjpeFzeHe6xDfbMW2UC8ylTMpN",
            client_secret:
              "lYTL8x6XduXyOGhoVVzB0OvWmvQS4Ll9b199wbS3zQCMb1ht8Og9ca8I3EAKpKXQPbIBMW8ji9V5bkeSpwa8CW3s6Uukohnwgsp6E2rGCrEq91Hjcd5S0uupBvYnbULO",
            token: params.access_token,
          }
        );

        localStorage.setItem("token", res.data.access_token);

        navigate("/dashboard");
      } catch (error) {
        console.error("Error converting token: ", error);
      }
    }

    convertToken();
  }, [params.access_token, navigate]);

  return (
    <div>
      <h1>Redirecting you...</h1>
    </div>
  );
}
