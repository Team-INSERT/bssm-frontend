import moment from "moment";
import "moment/locale/ko";

const useDate = () => {
  const getHMSDate = () => {
    const date = moment(new Date());
    const HMSDate = moment(date).locale("ko").format("A h:mm:ss");
    return HMSDate;
  };

  return { getHMSDate };
};

export default useDate;
