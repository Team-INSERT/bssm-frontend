interface PropsType {
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
}

const flexGenerator = ({ direction, align, justify }: PropsType) => `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      `;

const flex = {
  FLEX: flexGenerator({ align: "none", justify: "none" }),
  CENTER: flexGenerator({ align: "center", justify: "center" }),
  VERTICAL: flexGenerator({ align: "center" }),
  HORIZONTAL: flexGenerator({ justify: "center" }),
  START: flexGenerator({ align: "center", justify: "flex-start" }),
  BETWEEN: flexGenerator({ align: "center", justify: "space-between" }),
  END: flexGenerator({ align: "center", justify: "flex-end" }),

  COLUMN_FLEX: flexGenerator({
    direction: "column",
    align: "none",
    justify: "none",
  }),
  COLUMN_CENTER: flexGenerator({
    direction: "column",
    align: "center",
    justify: "center",
  }),
  COLUMN_VERTICAL: flexGenerator({ direction: "column", align: "center" }),
  COLUMN_HORIZONTAL: flexGenerator({ direction: "column", justify: "center" }),
  COLUMN_START: flexGenerator({
    direction: "column",
    align: "center",
    justify: "flex-start",
  }),
  COLUMN_BETWEEN: flexGenerator({
    direction: "column",
    align: "center",
    justify: "space-between",
  }),
  COLUMN_END: flexGenerator({
    direction: "column",
    align: "center",
    justify: "flex-end",
  }),
};

export default flex;
