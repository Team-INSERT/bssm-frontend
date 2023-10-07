import Storage from "@/apis/storage";
import { TOKEN } from "@/constants";

const getToken = () => {
  return Storage.getItem(TOKEN.ACCESS) || "";
};

export default getToken;
