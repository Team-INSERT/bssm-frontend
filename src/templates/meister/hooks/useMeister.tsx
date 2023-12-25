import React from "react";
import { useUser } from "@/@user/hooks";
import {
  useMeisterDetailQuery,
  useMeisterQuery,
} from "../services/query.service";
import meisterDefaultData from "../assets/data/defaultMeister.data";
import { getStudentInformationHTML, setMeisterPointNaming } from "../helpers";
import meisterDefaultDetailData from "../assets/data/defaultMeisterDetail.data";

const useMeister = () => {
  const { user } = useUser();

  const [studentNum, setStudentNum] = React.useState(
    String(user.grade * 1000 + user.classNum * 100 + user.studentNumber || ""),
  );
  const [meister, setMeister] = React.useState(meisterDefaultData);
  const [meisterDetail, setMeisterDetail] = React.useState(
    meisterDefaultDetailData,
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [studentInfo, setStudentInfo] = React.useState("");

  const meisterQuery = useMeisterQuery();
  const meisterDetailQuery = useMeisterDetailQuery(studentNum);

  const handleStudentSearchClick = () => {
    setIsLoading(true);
    meisterDetailQuery.refetch().then(() => setIsLoading(false));
  };

  const handleStudentNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const [grade, classNum, studentNum1, studentNum2] = [
      +value[0],
      +value[1],
      +value[2],
      +value[3],
    ];
    const studentNumber = `${studentNum1}${studentNum2}`;
    if (value.length > 4) return;
    if (Number.isNaN(+value)) return;
    if (grade > 3 || grade === 0) return;
    if (classNum > 4 || classNum === 0) return;
    if (studentNum1 > 1) return;
    if (+studentNumber > 16 || +studentNumber === 0) return;
    setStudentNum(value);
  };

  React.useEffect(() => {
    handleStudentSearchClick();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (meisterDetailQuery.isSuccess) {
      setMeisterDetail(meisterDetailQuery.data);
      const { scoreHtmlContent } = meisterDetailQuery.data.meister;
      setStudentInfo(getStudentInformationHTML(scoreHtmlContent));
    }
  }, [meisterDetailQuery]);

  React.useEffect(() => {
    if (meisterQuery.isSuccess) setMeister(meisterQuery.data);
  }, [meisterQuery]);

  React.useEffect(() => {
    setMeisterPointNaming();
  }, [meisterDetailQuery.isSuccess]);

  return {
    isLoading,
    isSuccess: meisterDetailQuery.isSuccess,
    meister,
    meisterDetail,
    studentInfo,
    studentNum,
    handleStudentNumChange,
    handleStudentSearchClick,
  };
};

export default useMeister;
