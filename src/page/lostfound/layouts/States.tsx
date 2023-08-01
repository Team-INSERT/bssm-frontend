import React from "react";
import { Category } from "@/components/atoms";
import { Row } from "@/components/Flex";

const states = [
  {
    name: "대기중",
    type: "wait",
  },
  {
    name: "수령 완료",
    type: "done",
  },
];

const States = () => {
  const [checked, setChecked] = React.useState("wait");

  const onCheckState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="6px">
      {states.map((state) => (
        <Category
          key={state.type}
          id={state.type}
          name="state"
          onChange={onCheckState}
          label={state.name}
          checked={state.type === checked}
        />
      ))}
    </Row>
  );
};

export default States;
