import { getToken } from "@/helpers";

const authorization = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default authorization;
