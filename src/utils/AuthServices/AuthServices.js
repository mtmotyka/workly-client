import decode from "jwt-decode";

const token = localStorage.getItem("accessToken");

const setToken = (token) => {
  localStorage.setItem("accessToken", token);
};

const isTokenExpired = (token) => {
  if (token !== null) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }
};

const isLoggedIn = () => {
  if (!token || isTokenExpired(token)) {
    return false;
  } else {
    return true;
  }
};

const logout = () => {
  localStorage.removeItem("accessToken");
};

export { isTokenExpired, isLoggedIn, logout, setToken };
