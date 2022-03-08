import http from "./httpService";

const loginUser = (data) => {
  return http.post("/user/login", data);
};

export default loginUser;
