import Storage from "@/apis/storage";
import { TOKEN } from "@/constants";

const authorization = () => ({
  headers: {
    Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
  },
});

export default authorization;
