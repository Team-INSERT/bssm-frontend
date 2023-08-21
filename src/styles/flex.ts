interface PropsType {
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
}

const flexGenerator = ({ direction, align, justify }: PropsType) => `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${align};
      align-items: ${justify};
      `;

const flex = {
  CENTER: flexGenerator({ align: "center", justify: "center" }),
  VERTICAL: flexGenerator({ align: "center" }),
  HORIZONTAL: flexGenerator({ justify: "center " }),

  COLUMN: flexGenerator({ direction: "column" }),
  COLUMN_CENTER: flexGenerator({
    direction: "column",
    align: "center",
    justify: "center",
  }),
  COLUMN_VERTICAL: flexGenerator({ direction: "column", align: "center" }),
  COLUMN_HORIZONTAL: flexGenerator({ direction: "column", justify: "center" }),
};

export default flex;
