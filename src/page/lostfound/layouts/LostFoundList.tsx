import Column from "@/components/Flex/Column";
import React from "react";
import LostFoundListItem from "./LostFoundListItem";

const LostFoundList = () => {
  return (
    <Column>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
        <LostFoundListItem key={key} />
      ))}
    </Column>
  );
};

export default LostFoundList;
