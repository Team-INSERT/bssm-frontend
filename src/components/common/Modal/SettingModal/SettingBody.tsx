import React from "react";
import styled from "styled-components";
import { color, font } from "@/styles";

const SettingBody = () => {
  return (
    <Container>
      <SettingSection>
        <SettingName>헤더</SettingName>
      </SettingSection>
      <SaveButton />
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
