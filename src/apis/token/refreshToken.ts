import axios from "axios";
import Storage from "@/apis/storage";

const refreshToken = async () => {
  try {
    const res = (
      await axios.put("/auth/refresh/access", {
        refresh_token: Storage.getItem("refresh_token"),
      })
    ).data;
    Storage.setItem("access_token", res.accessToken);
  } catch (err) {
    Storage.delItem("refresh_token");
  }
};

export default refreshToken;
