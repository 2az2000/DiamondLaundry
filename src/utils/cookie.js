const setCookie = (tokens) => {
  document.cookie = `accessToken=Bearer ${tokens.access_token};max-age=${
  60*60*3600
  }path=/`;
  document.cookie = `refreshToken=Bearer ${tokens.refresh_token};max-age=${
    30 * 1 * 24 * 60 * 60
  };path=/`;
};

const getCookie = (cookiName) => {
  // return document.cookie.split(";")[0].split("=")[1]


  return document.cookie
    .split(";")
    .find((item) => item.split("=")[0].includes(cookiName))
    ?.split("=")[1];
};

const removeCookie = () => {
  document.cookie = `accessToken= ; max-age=0`;
  document.cookie = `refreshToken= ; max-age=0`;
};
const getRole = (tokens) => {
  //roles : customer , admin
  return JSON.parse(atob(tokens.split(".")[1])).role;
};

export { setCookie, getCookie, removeCookie, getRole };
