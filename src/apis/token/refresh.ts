import { TOKEN } from "@/constants/";
import Storage from "@/apis/storage";
import httpClient from "../httpClient";
import { refreshToken } from "./request";

const refresh = async () => {
  try {
    const { data } = await httpClient.refresh.put(refreshToken());
    Storage.setItem(TOKEN.ACCESS, data.accessToken);
  } catch {
    alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    Storage.clear();
  }
};

export default refresh;
