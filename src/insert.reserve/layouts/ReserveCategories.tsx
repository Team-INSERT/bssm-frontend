import { Category } from "@/_components/atoms";
import { reserveViewTypeStore } from "@/_store/reserveViewType.store";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const ReserveCategories = () => {
  const [checked, setChecked] = useRecoilState(reserveViewTypeStore);

  return (
    <CategoryBox>
      {["신청하기", "목록 보기"].map((title) => (
        <Category
          key={title}
          id={title}
          name="reserve"
          checked={checked === title}
          onClick={() => setChecked(title)}
          label={title}
        />
      ))}
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export default ReserveCategories;
