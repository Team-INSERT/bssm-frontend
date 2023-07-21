import dayjs from "dayjs";

const useDate = () => {
  const getHMSDate = () => {
    const date = dayjs(new Date());
    const HMSDate = dayjs(date).locale("ko").format("A h:mm:ss");
    return HMSDate;
  };

  return { getHMSDate };
};

export default useDate;
