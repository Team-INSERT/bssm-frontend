import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import DefaultProfile from "@/global/assets/icons/profile_default.png";
import { Student } from "@/global/types/user.type";
import Link from "next/link";
import ROUTER from "@/global/constants/router.constant";
import USER from "@/global/constants/user.constant";
import Column from "../../Flex/Column";
import Row from "../../Flex/Row";

interface IInfomationBoxProps {
  user: Student;
  isLogined: boolean;
}

const InfomationBox = ({ user, isLogined }: IInfomationBoxProps) => {
  return (
    <Container>
      <ProfileImage
        src={user.profile ?? DefaultProfile}
        alt="profile"
        width={50}
        height={50}
      />
      {isLogined && user.role === USER.STUDENT && (
        <>
          <Column>
            <Row>
              <UserInfoText>{user.student.grade}학년</UserInfoText>
              <UserInfoText>{user.student.classNo}반</UserInfoText>
              <UserInfoText>{user.student.studentNo}번</UserInfoText>
            </Row>
            <Row gap="4px">
              <UserName>{user.student.name}</UserName>
              <UserType>{user.role}</UserType>
            </Row>
          </Column>
          <InfomationButton href={ROUTER.MYPAGE}>내 정보</InfomationButton>
        </>
      )}
      {!isLogined && (
        <>
          <LoginText>로그인이 필요합니다.</LoginText>
          <InfomationButton
            href={process.env.NEXT_PUBLIC_OAUTH_URL || ROUTER.HOME}
          >
            로그인
          </InfomationButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 85px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 18px;
  border-radius: 5px;
`;

const UserInfoText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const UserName = styled.span`
  ${font.H4};
`;

const UserType = styled.span`
  margin-top: auto;
  ${font.p3};
  color: ${color.gray};
`;

const InfomationButton = styled(Link)`
  width: 76px;
  height: 26px;
  background-color: ${color.primary_blue};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  ${font.btn3};
  color: ${color.white};
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  background-color: black;
  flex-shrink: 0;
`;

const LoginText = styled.span`
  ${font.context};
`;

export default InfomationBox;
