import React from "react";
import styled from "styled-components";
import { color, font } from "@/styles";
import { Switch } from "@/components/atoms";
import Storage from "@/apis/storage";
import useModal from "@/hooks/useModal";

const settingOptions = [
  {
    name: "디스플레이",
    options: [
      {
        title: "다크 모드 켜기",
        isHaveDescription: true,
        description: "다크 모드를 켜요. 디자인 퀄리티가 낮아질 수 있어요.",
        type: "bool",
      },
    ],
  },
  {
    name: "커뮤니티",
    options: [
      {
        title: "렌더당 렌더링할 게시글 개수",
        isHaveDescription: true,
        description:
          "한 번의 렌더당 몇 개의 게시글을 렌더링할 지 정할 수 있어요.",
        type: "input",
      },
    ],
  },
];

const SettingBody = () => {
  const { closeModal } = useModal();
  const [darkMode, setDarkMode] = React.useState(!!Storage.getItem("theme"));
  const [postLimit, setPostLimit] = React.useState(
    Storage.getItem("post_render_limit") || 20,
  );

  const handleSaveButtonClick = () => {
    if (darkMode) Storage.setItem("theme", "dark");
    Storage.setItem("post_render_limit", `${postLimit}`);
    closeModal();
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
              {option.type === "bool" && (
                <SwitchBox>
                  <Switch
                    isSwitch={darkMode}
                    handleToggle={() => setDarkMode((prev) => !prev)}
                  />
                </SwitchBox>
              )}
              {option.type === "input" && (
                <StyledInputBox>
                  <StyledInput
                    value={postLimit}
                    onChange={(e) =>
                      !Number.isNaN(+e.target.value) &&
                      setPostLimit(e.target.value)
                    }
                  />
                  <StyledSummary />
                </StyledInputBox>
              )}
            </SettingBox>
          ))}
        </SettingSection>
      ))}
      <SaveButton onClick={handleSaveButtonClick} />
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

const StyledInputBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledInput = styled.input`
  max-width: 70px;
  text-align: right;
  padding: 4px 8px;
  background-color: ${color.white};
  ${font.p4};
  box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.1);
`;

const StyledSummary = styled.span`
  ${font.p3};
  &:after {
    content: "개";
  }
`;

const SaveButton = styled.button`
  margin-left: auto;
  padding: 6px 18px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  ${font.p4};
  border-radius: 4px;

  &:after {
    content: "저장하기";
  }
`;

export default SettingBody;
