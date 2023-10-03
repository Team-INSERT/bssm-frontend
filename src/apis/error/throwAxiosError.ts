import { isAxiosError } from "axios";

const throwAxiosError = (err: unknown) => {
  if (!isAxiosError(err))
    return {
      data: "",
      status: "",
      message: "",
    };

  const data = err?.response?.data;
  const { code, status, message } = data;
  console.log(err);

  return { code, status, message };
};

export default throwAxiosError;
