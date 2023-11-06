import React from "react";
import styled from "styled-components";
import Storage from "@/apis/storage";
import { flex } from "@/styles";
import { Category } from "@/components/atoms";
import useWindow from "@/hooks/useWindow";
import BasicMode from "./layouts/BasicMode";
import RemoconMode from "./layouts/RemoconMode";

const HomePage = () => {
  const [viewMode, setViewMode] = React.useState("");
  const { isWindow } = useWindow();

  React.useEffect(() => {
    setViewMode(Storage.getItem("home_view_mode") || "기본 모드");
  }, [isWindow]);

  const handleChangeClick = (modeName: string) => {
    setViewMode(modeName);
    Storage.setItem("home_view_mode", modeName);
  };

  return (
    <Layout>
      <Container>
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
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  ${flex.COLUMN};
  gap: 8px;
`;

const ModeBox = styled.div`
  width: fit-content;
  ${flex.VERTICAL};
  flex-wrap: wrap;
  gap: 12px;
`;

export default HomePage;
