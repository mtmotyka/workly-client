import decode from "jwt-decode";

let token = localStorage.getItem("accessToken");

const setToken = (token) => {
  localStorage.setItem("accessToken", token);
};

const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};

const isLoggedIn = () => {
  if (!token || isTokenExpired(token)) {
    console.log("niezalogowany");
    //todo: redirect to login page
    //todo2: redirect with info "you must be logged in..."
  }
};

const logout = () => {
  localStorage.removeItem("accessToken");
  console.log("wyloguj");
  //todo: redirect to login page
};

export { isTokenExpired, isLoggedIn, logout, setToken };
