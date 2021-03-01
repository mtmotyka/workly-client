import decode from "jwt-decode";

let token = localStorage.getItem("accessToken");

const setToken = (token) => {
  localStorage.setItem("accessToken", token);
};

const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    return decoded.exp < Date.now() / 1000;
  } catch (err) {
    return false;
  }
};

const isLoggedIn = () => {
  return token && !isTokenExpired(token);
};

const logout = () => {
  localStorage.removeItem("accessToken");
};

export { isTokenExpired, isLoggedIn, logout, setToken };
