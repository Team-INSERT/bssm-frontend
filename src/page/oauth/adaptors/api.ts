import { axiosConfig, HttpClient } from "@/apis/httpClient";

export default {
  oauth: new HttpClient("/auth/oauth/bsm", axiosConfig),
};
