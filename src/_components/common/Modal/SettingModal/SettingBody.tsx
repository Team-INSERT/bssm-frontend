import React from "react";
import styled from "styled-components";
import { color, font } from "@/_styles";
import { Switch } from "@/_components/atoms";

const settingOptions = [
  {
    name: "디스플레이",
    options: [
      {
        title: "다크 모드 켜기",
        isHaveDescription: false,
      },
      {
        title: "홈에만 커스텀 백그라운드 적용",
        isHaveDescription: true,
        description:
          "홈 화면에서만 커스텀으로 설정한 백그라운드를 적용시킬 수 있어요.",
      },
      {
        title: "디스플레이 배율 설정",
        isHaveDescription: false,
      },
    ],
  },
  {
    name: "커뮤니티",
    options: [
      {
        title: "익명 모드 켜놓기",
        isHaveDescription: true,
        description: "익명 모드를 기본값으로 설정할 수 있어요.",
      },
      {
        title: "렌더당 렌더링할 게시글 개수",
        isHaveDescription: true,
        description:
          "한 번의 렌더당 몇 개의 게시글을 렌더링할 지 정할 수 있어요.",
      },
      {
        title: "자세한 시간 표시",
        isHaveDescription: true,
        description:
          "게시글이나 댓글에서 시간, 분, 초 등의 자세한 시간을 표시해요.",
      },
      {
        title: "모든 답글 표시",
        isHaveDescription: true,
        description: "모든 답글을 항상 표시해요. 답글이 너무 깊을 수 있어요.",
      },
      {
        title: "딥웹 모드",
        isHaveDescription: true,
        description: "예전 BSM의 매운 맛을 즐길 수 있어요.",
      },
    ],
  },
  {
    name: "알림 설정",
    options: [
      {
        title: "웹 사이트 알림 받기",
        isHaveDescription: true,
        description: "급식 등의 여러가지 서비스 알림을 구독할 수 있어요.",
      },
    ],
  },
];

const SettingBody = () => {
  const [isSwitch, setIsSwitch] = React.useState(false);

  const handleToggleButton = () => {
    setIsSwitch(!isSwitch);
  };

  return (
    <Container>
      {settingOptions.map(({ name, options }) => (
        <SettingSection>
          <SettingName>{name}</SettingName>
          {options.map((option) => (
            <SettingBox>
              <SettingHandleHGroup>
                <SettingHandleTitle>{option.title}</SettingHandleTitle>
                {option.isHaveDescription && (
                  <SettingHandleDescription>
                    {option.description}
                  </SettingHandleDescription>
                )}
              </SettingHandleHGroup>
              <SwitchBox>
                <Switch isSwitch={isSwitch} handleToggle={handleToggleButton} />
              </SwitchBox>
            </SettingBox>
          ))}
        </SettingSection>
      ))}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 26px;
  gap: 30px;
`;

const SettingSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingName = styled.span`
  ${font.H5};
  margin-right: auto;
`;

const SettingBox = styled.div`
  width: 100%;
  padding: 26px 16px 26px 0;
  border-bottom: 1.5px solid ${color.on_tertiary};
  display: flex;
  align-items: center;
`;

const SettingHandleHGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const SettingHandleTitle = styled.h1`
  ${font.p2};
`;

const SettingHandleDescription = styled.p`
  ${font.p3};
  color: ${color.gray};
`;

const SwitchBox = styled.div`
  margin-left: auto;
`;

export default SettingBody;
