import styled from "styled-components";
import { color, font } from "@/styles";
import { USER } from "@/constants";
import { IUser } from "@/interfaces";
import { Row, Column } from "@/components/Flex";
import { getUserRole } from "@/helpers";
import flex from "@/styles/flex";
import { ImageWithFallback } from "@/components/atoms";
import { defaultProfile } from "@/assets/images";
import useModal from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import LoginModal from "../Modal/LoginModal";

interface IInfomationBoxProps {
  user: IUser;
  isLogined: boolean;
}

const InfomationBox = ({ user, isLogined }: IInfomationBoxProps) => {
  const router = useRouter();
  const isLoginedStudent = isLogined && user.role === USER.STUDENT;
  const { openModal } = useModal();

  const handleLoginButtonClick = () => {
    if (isLogined) router.push("/");
    openModal({
      component: <LoginModal />,
    });
  };

  return (
    <Container>
      {isLogined && (
        <ImageWithFallback
          src={user.profile_image ?? "/"}
          fallbackSrc={defaultProfile}
          alt="profile"
          width={46}
          height={46}
          rounded
        />
      )}
      {isLoginedStudent && (
        <>
          <Column>
            <UserInfoBox>
              <UserGrade>{user.grade}</UserGrade>
              <UserClass>{user.classNum}</UserClass>
              <UserStudentNumber>{user.studentNumber}</UserStudentNumber>
            </UserInfoBox>
            <Row gap="4px">
              <UserName>{user.name}</UserName>
              <UserType>{getUserRole(user.role)}</UserType>
            </Row>
          </Column>
          <InfomationButton onClick={handleLoginButtonClick}>
            내 정보
          </InfomationButton>
        </>
      )}
      {!isLogined && (
        <>
          <LoginText>로그인이 필요해요</LoginText>
          <InfomationButton onClick={handleLoginButtonClick}>
            로그인
          </InfomationButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.main`
  ${flex.CENTER};
  width: 100%;
  height: 100%;
  background-color: ${color.white};
  gap: 8px;
  padding: 14px 22px;
  border-radius: 5px;

  @media screen and (max-width: 1074px) {
    padding: 0px 14px;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  gap: 4px;

  @media screen and (max-width: 1074px) {
    display: none;
  }
`;

const UserInfoText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const UserGrade = styled(UserInfoText)`
  &:after {
    content: "학년";
  }
`;

const UserClass = styled(UserInfoText)`
  &:after {
    content: "반";
  }
`;

const UserStudentNumber = styled(UserInfoText)`
  @media screen and (max-width: 1360px) {
    display: none;
  }

  &:after {
    content: "번";
  }
`;

const UserName = styled.span`
  ${font.H4};
`;

const UserType = styled.span`
  ${font.p3};
  color: ${color.gray};
  margin-top: auto;

  @media screen and (max-width: 1360px) {
    display: none;
  }
`;

const InfomationButton = styled.button`
  ${flex.CENTER};
  ${font.btn3};
  padding: 4px 10px;
  border: none;
  background-color: ${color.primary_blue};
  border-radius: 5px;
  margin-left: auto;
  color: ${color.white};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const LoginText = styled.span`
  ${font.context};
`;

export default InfomationBox;
