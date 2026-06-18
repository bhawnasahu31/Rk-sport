import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    if (username && email) {
      setUser({ username, email });
    }
  }, []);

  // ✅ SAFE LOGIN
  const login = (userData) => {
    if (!userData || !userData.email) {
      console.warn("login called without valid userData");
      return false;
    }

    const username = userData.username || "User";

    setUser({ username, email: userData.email });

    localStorage.setItem("username", username);
    localStorage.setItem("email", userData.email);

    return true;
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser({ username: "", email: "" });
    localStorage.clear();
  };

  // ✅ PROFILE UPDATE
 const updateUser = (newData) => {
  setUser(prev => {
    const updated = { ...prev, ...newData };

    if (updated.username)
      localStorage.setItem("username", updated.username);

    if (updated.email)
      localStorage.setItem("email", updated.email);

    if (newData.password)
      localStorage.setItem("password", newData.password);

    return updated;
  });
};


  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
