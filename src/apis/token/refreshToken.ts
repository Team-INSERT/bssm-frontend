import axios from "axios";
import Storage from "@/apis/storage";
import TOKEN from "@/global/constants/token.constant";

const refreshToken = async () => {
  // fix 필요
  try {
    const res = (
      await axios.put("/auth/refresh/access", {
        refresh_token: Storage.getItem(TOKEN.REFRESH),
      })
    ).data;
    Storage.setItem(TOKEN.ACCESS, res.accessToken);
  } catch (err) {
    Storage.delItem(TOKEN.REFRESH);
  }
};

export default refreshToken;
