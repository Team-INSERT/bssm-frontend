import { isAxiosError } from "axios";
import { toast } from "react-toastify";

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
  toast.error("오류가 발생했습니다.");

  return { code, status, message };
};

export default throwAxiosError;
