import axios from "axios";

export const loadUsersApi = async () => {
  return await axios.get("https://random-data-api.com/api/users/random_user?size=5");
};

