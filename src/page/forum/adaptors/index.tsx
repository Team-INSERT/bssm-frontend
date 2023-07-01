import { HttpClient, axiosConfig } from "@/apis/httpClient";

export default {
  forum: new HttpClient("/forum", axiosConfig),
};
