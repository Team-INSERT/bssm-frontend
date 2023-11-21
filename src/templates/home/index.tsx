import React from "react";
import styled from "styled-components";
import Storage from "@/storage";
import { flex } from "@/styles";
import { Category } from "@/components/atoms";
import useWindow from "@/hooks/useWindow";
import BasicMode from "./layouts/BasicMode";
import RemoconMode from "./layouts/RemoconMode";

const HomePage = () => {
  const [viewMode, setViewMode] = React.useState("");
  const { isWindow } = useWindow();

  React.useEffect(() => {
    setViewMode(Storage.getItem("SETTING:홈페이지조회형식") || "기본 모드");
  }, [isWindow]);

  const handleChangeClick = (modeName: string) => {
    setViewMode(modeName);
    Storage.setItem("SETTING:홈페이지조회형식", modeName);
  };

  return (
    <Layout>
      <ModeBox>
        {["기본 모드", "리모콘 모드"].map((modeName) => (
          <Category
            key={modeName}
            id={modeName}
            name="viewMode"
            onChange={() => handleChangeClick(modeName)}
            label={modeName}
            checked={modeName === viewMode}
          />
        ))}
      </ModeBox>
      {viewMode === "기본 모드" && <BasicMode />}
      {viewMode === "리모콘 모드" && <RemoconMode />}
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN};
  gap: 20px;
`;

const ModeBox = styled.div`
  width: fit-content;
  ${flex.VERTICAL};
  flex-wrap: wrap;
  gap: 12px;
`;

export default HomePage;
