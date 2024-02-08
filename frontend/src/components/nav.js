import { useState, useEffect } from "react";

export default function Nav() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setToken(token);

    return () => {
      setToken(null);
    };
  }, [token]);

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {token ? (
          <>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  console.log("Token removed: ", token);
                  setToken(null);
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
