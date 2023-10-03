import { TOKEN } from "@/constants/";
import Storage from "@/apis/storage";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const refresh = async () => {
  try {
    const { data } = await instance.put("/api/auth/refresh/access", {
      refreshToken: `${Storage.getItem(TOKEN.REFRESH)}`,
    });
    Storage.setItem(TOKEN.ACCESS, data.accessToken);
  } catch (err) {
    Storage.clear();
  }
};

export default refresh;
