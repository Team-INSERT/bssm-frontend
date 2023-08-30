import { TOKEN } from "@/constants/";
import Storage from "@/apis/storage";
import httpClient from "../httpClient";

const refresh = async () => {
  try {
    const { data } = await httpClient.refresh.put({
      refreshToken: `${Storage.getItem(TOKEN.REFRESH)}`,
    });
    Storage.setItem(TOKEN.ACCESS, data.accessToken);
  } catch (err) {
    Storage.clear();
  }
};

export default refresh;
