import Storage from "@/apis/storage";
import { TOKEN } from "@/constants";

export const authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
    },
  };
};

export const refreshToken = () => {
  return {
    headers: {
      refresh_token: `Bearer ${Storage.getItem(TOKEN.REFRESH)}`,
    },
  };
};
