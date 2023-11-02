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
import MeisterProfileBox from "./layouts/MeisterProfileBox";
import YearlyMeisterScore from "./layouts/YearlyMeisterScore";
import Distribution from "./layouts/Distribution";
import StatusCard from "./layouts/StatusCard";
import {
  useMeisterDetailQuery,
  useMeisterQuery,
} from "./services/query.service";
import Ranking from "./layouts/Ranking";
import BasicJobSkillCard from "./layouts/BasicJobSkillCard";

interface IMeisterData {
  name: "professionalTech" | "workEthic" | "humanities" | "foreignScore";
  color: string;
}

const meisterList: Array<IMeisterData> = [
  { name: "professionalTech", color: color.primary_mint },
  { name: "workEthic", color: color.primary_red },
  { name: "humanities", color: color.primary_yellow },
  { name: "foreignScore", color: color.primary_blue },
];

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

  const handleStudentNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
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
            // eslint-disable-next-line
            `<div style=\"padding-top:10px; padding-bottom:10px; text-align:right;\">`,
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
            {["분석", "랭킹"].map((title) => (
              <Category
                id={title}
                name="meister"
                label={title}
                checked={checked === title}
                onChange={(e) => setChecked(e.target.id)}
              />
            ))}
          </CategoryBox>
          <InputWrap>
            <Column gap="4px">
              <InputTitle>학번 입력</InputTitle>
              <Form onSubmit={(e) => e.preventDefault()}>
                <StyledInput
                  value={studentNumber}
                  onChange={handleStudentNumberChange}
                />
                <StyledButton onClick={handleStudentSearchClick} type="submit">
                  조회
                </StyledButton>
              </Form>
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
                    {meisterList.map(({ name, color: status }) => (
                      <StatusCard
                        key={name}
                        chapter={name}
                        score={meister.meister[name]}
                        maxScore={meister.max[name]}
                        statusColor={status}
                      />
                    ))}
                  </StatusCardBox>
                  <Row width="100%" justifyContent="space-between">
                    {meisterData.isSuccess && (
                      <YearlyMeisterScore meisterData={meister} />
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
                      <BasicJobSkillCard
                        chapter={item.title}
                        score={item.value}
                        statusColor={item.status}
                      />
                    ),
                  )}
              </StatusCardBox>
              {meisterDetail.isSuccess && (
                <>
                  <ScoreHTMLContent
                    dangerouslySetInnerHTML={{
                      __html: scoreParser(meisterDetail.data.scoreHtmlContent),
                    }}
                  />
                  <PointHTMLContent
                    dangerouslySetInnerHTML={{
                      __html: pointParser(meisterDetail.data.pointHtmlContent),
                    }}
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

const ScoreHTMLContent = styled.div`
  width: 100%;
  white-space: pre-wrap;
  & > div {
    display: none;
  }

  .item-score {
    ${font.p3};
    color: ${color.gray};
  }

  .total-score-item {
    ${font.H6};
  }

  .list-item {
    ${font.p2};
    font-weight: 600;
    padding: 20px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .section-date {
    margin: 0;
    padding: 0;
    text-align: left;
    ${font.p3};
    color: ${color.gray};
    font-weight: 500;
  }

  & > .titleBarA {
    ${font.H5};

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }

  & > table {
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      display: none;
    }
    background-color: ${color.white};
    width: 100%;
    padding: 16px 20px;
    border-radius: 4px;

    tbody {
      tr {
        &:first-child,
        &:last-child {
          display: none;
        }

        td {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            display: none;
          }
        }
      }
    }
  }
`;

const PointHTMLContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  div {
    flex: 100% !important;
    font-size: 18px !important;
    font-weight: bold !important;
  }

  li {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    width: calc(50% - 0.5rem) !important;
    height: 12.5rem !important;
    background-color: #ccffd8 !important;
    border-radius: 1rem !important;
    transition: var(--hover-transition) !important;
  }

  li:hover {
    background-color: #9effb5 !important;
  }

  .bad {
    color: black !important;
    background-color: #ffd7d5 !important;
  }

  .bad:hover {
    background-color: #ffc9c6 !important;
  }

  li > div {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    border: none !important;
    box-shadow: none !important;
    padding: 1rem 2rem !important;
  }

  li:not(.bad) > div {
    font-weight: normal !important;
  }

  li > div > div {
    font-size: 16px !important;
    font-weight: 500 !important;
    text-align: center !important;
    white-space: pre-wrap !important;
    color: ${color.gray};
    padding-top: 10px !important;
  }

  li > div > div:first-child > div {
    font-size: 18px !important;
    font-weight: 500 !important;
    color: black !important;
  }
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

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default MeisterPage;
