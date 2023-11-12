import Storage from "@/storage";
import { TOKEN } from "@/storage/constants";

const getToken = () => {
  return Storage.getItem(TOKEN.ACCESS) || "";
};

export default getToken;
