import { isAxiosError } from "axios";

const throwAxiosError = (err: unknown) => {
  if (!isAxiosError(err))
    return {
      data: "",
      status: "",
      message: "",
    };

  // development test
  console.log(err);
  const data = err?.response?.data;
  const { code, status, message } = data;

  return { code, status, message };
};

export default throwAxiosError;
