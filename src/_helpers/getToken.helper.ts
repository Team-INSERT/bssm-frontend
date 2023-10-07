import Storage from "@/_apis/storage";
import { TOKEN } from "@/_constants";

const getToken = () => {
  return Storage.getItem(TOKEN.ACCESS) || "";
};

export default getToken;
