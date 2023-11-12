import Storage from "@/storage";
import { TOKEN } from "@/storage/constants";

const authorization = () => ({
  headers: {
    Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
  },
});

export default authorization;
