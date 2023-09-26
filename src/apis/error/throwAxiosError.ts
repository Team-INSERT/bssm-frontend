import { isAxiosError } from "axios";

const throwAxiosError = (err: unknown) => {
  if (isAxiosError(err) && err.response) {
    const { code, status, message } = err.response.data;

    return { code, status, message };
  }
};

export default throwAxiosError;
