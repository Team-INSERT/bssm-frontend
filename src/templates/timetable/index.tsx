import styled from "styled-components";
import { flex } from "@/styles";
import useUser from "@/hooks/useUser";
import useModal from "@/hooks/useModal";
import React from "react";
import LoginModal from "@/components/common/Modal/LoginModal";
import { useDidMountEffect } from "@/hooks/useDidMountEffect";
import Storage from "@/apis/storage";
import { TOKEN } from "@/constants";
import TimeTableBox from "./layouts/TimeTableBox";

const TimeTablePage = () => {
  const { isLogined } = useUser();
  const { openModal } = useModal();

  useDidMountEffect(() => {
    if (!Storage.getItem(TOKEN.ACCESS)) {
      openModal({
        component: <LoginModal />,
      });
    }
  }, []);

  return (
    <Layout>
      {isLogined && (
        <Container>
          <TimeTableBox />
        </Container>
      )}
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  ${flex.CENTER}
  gap: 8px;
`;

export default TimeTablePage;
