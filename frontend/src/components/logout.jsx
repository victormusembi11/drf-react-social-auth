import React from 'react'

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
  return (
    <button type="submit">
        Logout
    </button>
  )
}

export default Logout