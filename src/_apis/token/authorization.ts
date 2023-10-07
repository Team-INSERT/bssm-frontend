import Storage from "@/_apis/storage";
import { TOKEN } from "@/_constants";

const authorization = () => ({
  headers: {
    Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
  },
});

export default authorization;
