import React from "react";
import { useUser } from "@/@user/hooks";
import { useAtom } from "jotai";
import {
  useMeisterDetailQuery,
  useMeisterQuery,
} from "../services/query.service";
import meisterDefaultData from "../assets/data/defaultMeister.data";
import {
  getStudentId,
  getStudentInformationHTML,
  setMeisterPointNaming,
} from "../helpers";
import meisterDefaultDetailData from "../assets/data/defaultMeisterDetail.data";
import { studentNumberContext, buttonSwitchContext } from "../context";

const useMeister = () => {
  const {
    user: { grade, classNum, studentNumber },
  } = useUser();

  const [viewType, setViewType] = React.useState("분석");
  const [studentNum, setStudentNum] = useAtom(studentNumberContext);
  const [buttonSwitch, setButtonSwitch] = useAtom(buttonSwitchContext);

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
    const [inputGrade, inputClassNum, studentNum1, studentNum2] = value
      .split("")
      .map((item) => +item);
    const inputStudentNum = `${studentNum1}${studentNum2}`;
    if (value.length > 4) return;
    if (Number.isNaN(+value)) return;
    if (inputGrade > 3 || inputGrade === 0) return;
    if (inputClassNum > 4 || inputClassNum === 0) return;
    if (studentNum1 > 1) return;
    if (+inputStudentNum > 16 || +inputStudentNum === 0) return;
    setStudentNum(value);
  };

  React.useEffect(() => {
    if (buttonSwitch) {
      setViewType("분석");
      meisterDetailQuery.refetch().then(() => setButtonSwitch(false));
    }
    // eslint-disable-next-line
  }, [buttonSwitch]);

  React.useEffect(() => {
    handleStudentSearchClick();
    setStudentNum(getStudentId(grade, classNum, studentNumber));
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
    viewType,
    setViewType,
    handleStudentNumChange,
    handleStudentSearchClick,
  };
};

export default useMeister;
