import http from "./httpService";
const registerUser = (data) => {
  return http.post("/user/register", data);
};
export default registerUser;
