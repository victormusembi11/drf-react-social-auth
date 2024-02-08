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

  return (
    <form>
      <input type="text" name="username" onChange={handleChange} />
      <input type="text" name="password" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      <a href="https://www.facebook.com/v19.0/dialog/oauth?client_id=906353464279347&redirect_uri=http://localhost:3000/dashboard&state={facebook}&response_type=token">
        Login with Facebook
      </a>
    </form>
  );
}
