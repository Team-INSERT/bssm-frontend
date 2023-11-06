import { defaultProfile } from "@/assets/images";
import { Column, Row } from "@/components/Flex";
import { ImageWithFallback } from "@/components/atoms";
import useUser from "@/hooks/useUser";
import { ROUTER } from "@/constants";
import { color, flex, font } from "@/styles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BerIcon, CalenderIcon, MealIcon, NoticeIcon } from "@/assets/icons";
import TimetableIcon from "@/assets/icons/TimetableIcon";
import JoinCheckIcon from "@/assets/icons/JoinCheckIcon";
import { useMainQuery } from "../../services/query.service";

const remoconList = [
  { name: "오늘의 급식", href: ROUTER.MEAL, icon: <MealIcon width={40} /> },
  {
    name: "시간표",
    href: ROUTER.TIMETABLE,
    icon: <TimetableIcon width={40} />,
  },
  { name: "캘린더", href: ROUTER.CALENDER, icon: <CalenderIcon width={40} /> },
  { name: "게시판", href: ROUTER.POST, icon: <NoticeIcon width={40} /> },
  { name: "베르실 예약", href: ROUTER.RESERVE, icon: <BerIcon width={40} /> },
  {
    name: "기숙사 입사 체크",
    href: ROUTER.JOIN_CHECK,
    icon: <JoinCheckIcon width={40} />,
  },
];

const RemoconMode = () => {
  const { user } = useUser();
  const { data, isSuccess } = useMainQuery();

  return isSuccess ? (
    <Container>
      <RemoconBox href="https://auth.bssm.kro.kr/user" target="_blank">
        <ImageWithFallback
          src={user.profile_image}
          fallbackSrc={defaultProfile}
          alt="profile"
          width={50}
          height={50}
          rounded
        />
        <Column>
          <StudentInfomation>
            {user.grade}학년 {user.classNum}반 {user.studentNumber}번{" "}
            {user.name}
          </StudentInfomation>
          <Nickname>{user.nickname}</Nickname>
        </Column>
      </RemoconBox>
      <RemoconBox href={ROUTER.MEISTER}>
        <Column width="100%">
          <ScoreName>인증제 점수</ScoreName>
          <Row gap="4px">
            <Score>{data.meister.meister.score}</Score>
            <SubText>{data.ranking}위</SubText>
          </Row>
        </Column>
        <Column width="100%">
          <ScoreName>상점</ScoreName>
          <PositivePoint>{data.meister.meister.positivePoint}</PositivePoint>
        </Column>
        <Column width="100%">
          <ScoreName>벌점</ScoreName>
          <NegativePoint>{data.meister.meister.negativePoint}</NegativePoint>
        </Column>
      </RemoconBox>
      {remoconList.map((remocon) => (
        <RemoconBox href={remocon.href as string}>
          {remocon.icon}
          <RemoconText>{remocon.name}</RemoconText>
        </RemoconBox>
      ))}
    </Container>
  ) : null;
};

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  ${flex.VERTICAL};
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const RemoconBox = styled(Link)`
  width: 49%;
  height: 14vh;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  padding: 0px 30px;
  gap: 14px;
  border-radius: 6px;
`;

const StudentInfomation = styled.span`
  ${font.p2};
`;

const Nickname = styled.span`
  ${font.H4};
`;

const ScoreName = styled.span`
  ${font.H6};
  color: ${color.gray};
`;

const Score = styled.span`
  ${font.H3};

  &:after {
    content: "점";
  }
`;

const PositivePoint = styled(Score)`
  color: ${color.green};
`;

const NegativePoint = styled(Score)`
  color: ${color.red};
`;

const SubText = styled.span`
  ${font.p3};
  color: ${color.gray};
  margin-top: auto;
`;

const RemoconText = styled.span`
  ${font.H5};
`;

export default RemoconMode;
