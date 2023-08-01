import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { color, font } from "@/styles";
import { defaultProfile } from "@/assets/images";
import { USER, ROUTER } from "@/constants";
import { IUser } from "@/interfaces";
import { Row, Column } from "@/components/Flex";

interface IInfomationBoxProps {
  user: IUser;
  isLogined: boolean;
}

const InfomationBox = ({ user, isLogined }: IInfomationBoxProps) => {
  return (
    <Container>
      <ProfileImage
        src={user.profile ?? defaultProfile}
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
