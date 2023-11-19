import flex from "@/styles/flex";
import emptyMeister from "@/assets/data/emptyMeister";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import { Button, Category } from "@/components/atoms";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/constants";
import { useRecoilState } from "recoil";
import { searchStudentNumberStore } from "@/store/searchStudentNumber.store";
import { useMeisterHTML } from "@/hooks/useMeisterHTML";
import React from "react";
import styled from "styled-components";
import useUser from "@/hooks/useUser";
import MeisterProfileBox from "./MeisterProfileBox";
import YearlyMeisterScore from "./YearlyMeisterScore";
import Distribution from "./Distribution";
import {
  useMeisterDetailQuery,
  useMeisterQuery,
} from "../services/query.service";
import Ranking from "./Ranking";
import CircularProgressBox from "./CircularProgressBox";
import PointHTMLContent from "./PointHTMLContent";
import ScoreHTMLContent from "./ScoreHTMLContent";

interface MeisterData {
  name: "professionalTech" | "workEthic" | "humanities" | "foreignScore";
  color: string;
}

const meisterList: Array<MeisterData> = [
  { name: "professionalTech", color: color.primary_mint },
  { name: "workEthic", color: color.primary_red },
  { name: "humanities", color: color.primary_yellow },
  { name: "foreignScore", color: color.primary_blue },
];

const rankList = ["A", "B", "C", "D"];

const scoreList = [100, 75, 50, 25];

const MeisterPage = () => {
  const meisterData = useMeisterQuery();
  const meisterDetail = useMeisterDetailQuery();
  const { scoreParser, pointParser, getBasicJobSkills } = useMeisterHTML();
  const [meister, setMeister] = React.useState(emptyMeister);
  const { user } = useUser();
  const [checked, setChecked] = React.useState("분석");
  const [studentNumber, setStudentNumber] = useRecoilState(
    searchStudentNumberStore,
  );
  const [studentInfo, setStudentInfo] = React.useState("");
  const router = useRouter();

  const handleStudentNumberChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    const { value } = e.target;
    if (value.length > 4) return;
    if (Number.isNaN(+value)) return;
    if (+value[0] > 3 || +value[0] === 0) return;
    if (+value[1] > 4 || +value[1] === 0) return;
    if (+value[2] > 1) return;
    if (+(value[2] + value[3]) > 16 || +(value[2] + value[3]) === 0) return;
    setStudentNumber(value);
  };

  const handleStudentSearchClick = () => {
    meisterDetail.refetch();
  };

  React.useEffect(() => {
    if (meisterDetail.isSuccess) {
      const A = meisterDetail.data.scoreHtmlContent as string;
      setStudentInfo(
        A.substring(
          A.indexOf(
            `<div style="padding-top:10px; padding-bottom:10px; text-align:right;">`,
          ),
          A.indexOf(`</div>`),
        ).replace(
          '<div style="padding-top:10px; padding-bottom:10px; text-align:right;">',
          "",
        ),
      );
    }
  }, [meisterDetail]);

  const meisterPointPostProcessing = () => {
    document.querySelectorAll(".fas.fa-sad-cry").forEach((item) => {
      item?.parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
        "bad",
      );
    });
    document.querySelectorAll("li").forEach((item) => {
      item?.parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
        "ssyan",
      );
    });
  };

  React.useEffect(meisterPointPostProcessing, [meisterDetail]);

  React.useEffect(() => {
    if (meisterData.isSuccess) {
      setMeister(meisterData.data);
    }
  }, [meisterData]);

  return (
    <Layout>
      {meisterData.isSuccess && (
        <Container>
          <StyledTitle>조회 형식</StyledTitle>
          <CategoryBox>
            {["분석", "랭킹"].map((category) => (
              <Category
                id={category}
                name="meister"
                label={category}
                checked={checked === category}
                onChange={() => setChecked(category)}
              />
            ))}
          </CategoryBox>
          <InputWrap>
            <Column gap="4px">
              <InputTitle>학번 입력</InputTitle>
              <Row
                as="form"
                alignItems="center"
                gap="12px"
                onSubmit={(e) => e.preventDefault()}
              >
                <StyledInput
                  value={studentNumber}
                  onChange={handleStudentNumberChange}
                />
                <StyledButton onClick={handleStudentSearchClick} type="submit">
                  조회
                </StyledButton>
              </Row>
            </Column>
          </InputWrap>
          {checked === "분석" && meisterDetail.isSuccess && (
            <>
              <MeisterProfileBox
                meister={meisterDetail.data}
                name={studentInfo}
              />
              {studentInfo.includes(user.name) && (
                <>
                  <StatusCardBox>
                    {meisterList.map(({ name, color: status }) => {
                      const rate =
                        (meister.meister[name] / meister.max[name]) * 100;
                      return (
                        <CircularProgressBox
                          key={name}
                          chapter={name}
                          score={`${meister.meister[name]}점`}
                          statusColor={status}
                          value={rate}
                          text={`${Math.round(rate)}%`}
                        />
                      );
                    })}
                  </StatusCardBox>
                  <Row width="100%" justifyContent="space-between">
                    {meisterData.isSuccess && (
                      <YearlyMeisterScore meisterData={meisterData.data} />
                    )}
                    <Distribution meisterData={meister} />
                  </Row>
                </>
              )}
              <StyledTitle>💼 직업 기초 능력</StyledTitle>
              <StatusCardBox>
                {meisterDetail.isSuccess &&
                  getBasicJobSkills(meisterDetail.data.scoreHtmlContent).map(
                    (item) => (
                      <CircularProgressBox
                        key={item.title}
                        chapter={item.title}
                        score={`${item.value}등급`}
                        statusColor={item.status}
                        value={scoreList[item.value - 1]}
                        text={`${rankList[item.value - 1]}`}
                      />
                    ),
                  )}
              </StatusCardBox>
              {meisterDetail.isSuccess && (
                <>
                  <ScoreHTMLContent
                    scoreHTML={scoreParser(meisterDetail.data.scoreHtmlContent)}
                  />
                  <PointHTMLContent
                    pointHTML={pointParser(meisterDetail.data.pointHtmlContent)}
                  />
                </>
              )}
            </>
          )}
          {checked === "랭킹" && <Ranking />}
        </Container>
      )}
      {meisterData.isError && (
        <Column
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="70vh"
        >
          <Button
            color={color.primary_blue}
            onClick={() =>
              router.push(process.env.NEXT_PUBLIC_OAUTH_URL || ROUTER.HOME)
            }
          >
            로그인하세요
          </Button>
        </Column>
      )}
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.CENTER};
`;

const Container = styled.div`
  width: 76%;
  ${flex.COLUMN_CENTER};
  gap: 12px;
`;

const StatusCardBox = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const StyledTitle = styled.span`
  ${font.p2};
  font-weight: 500;
  margin-right: auto;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InputTitle = styled.span`
  ${font.p3};
`;

const StyledInput = styled.input`
  width: 70px;
  padding: 8px 6px;
  box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.05);
  background-color: ${color.white};
`;

const StyledButton = styled.button`
  width: fit-content;
  padding: 6px 14px;
  background-color: ${color.primary_blue};
  border-radius: 6px;
  color: white;
`;

export default MeisterPage;
