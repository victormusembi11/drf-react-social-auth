import { useState } from "react";

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

  function handleSubmit(e) {
    e.preventDefault();

    console.log(credentials);
  }

  function facebookLogin() {
    window.location.href =
      "https://www.facebook.com/v19.0/dialog/oauth?client_id=906353464279347&redirect_uri=http://localhost:3000/auth-check&state={facebook}&response_type=token";
  }

  return (
    <>
      <form>
        <input type="text" name="username" onChange={handleChange} />
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <button onClick={facebookLogin}>Login with Facebook</button>
    </>
  );
}
