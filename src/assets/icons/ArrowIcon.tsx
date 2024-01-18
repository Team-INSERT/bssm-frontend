import { DIRECTION } from "@/constants";
import styled from "styled-components";

const path = {
  [DIRECTION.TOP]:
    "M1.66419 23.4679C2.24222 24.0457 3.02609 24.3703 3.84342 24.3703C4.66075 24.3703 5.44462 24.0457 6.02265 23.4679L21.2803 8.21018L36.538 23.4679C37.1193 24.0293 37.898 24.34 38.7061 24.333C39.5143 24.326 40.2874 24.0018 40.8589 23.4303C41.4304 22.8588 41.7546 22.0857 41.7616 21.2775C41.7686 20.4694 41.4579 19.6907 40.8965 19.1094L23.4596 1.67249C22.8815 1.09464 22.0977 0.77002 21.2803 0.77002C20.463 0.77002 19.6791 1.09464 19.1011 1.67249L1.66419 19.1094C1.08634 19.6874 0.761719 20.4713 0.761719 21.2886C0.761719 22.106 1.08634 22.8898 1.66419 23.4679Z",
  [DIRECTION.RIGHT]:
    "M1.36271 0.972786C0.784855 1.55081 0.460235 2.33468 0.460235 3.15201C0.460235 3.96934 0.784855 4.75321 1.36271 5.33124L16.6204 20.5889L1.36271 35.8466C0.801232 36.4279 0.490547 37.2066 0.49757 38.0147C0.504593 38.8229 0.828761 39.596 1.40026 40.1675C1.97175 40.739 2.74485 41.0632 3.55303 41.0702C4.36121 41.0772 5.13982 40.7665 5.72116 40.2051L23.1581 22.7681C23.7359 22.1901 24.0605 21.4063 24.0605 20.5889C24.0605 19.7716 23.7359 18.9877 23.1581 18.4097L5.72116 0.972786C5.14314 0.394932 4.35927 0.0703125 3.54194 0.0703125C2.7246 0.0703125 1.94074 0.394932 1.36271 0.972786Z",
  [DIRECTION.BOTTOM]:
    "M40.8592 1.67228C40.2812 1.09443 39.4973 0.769805 38.68 0.769805C37.8627 0.769805 37.0788 1.09443 36.5008 1.67228L21.2431 16.93L5.98543 1.67228C5.40409 1.1108 4.62548 0.800118 3.81729 0.80714C3.00911 0.814163 2.23601 1.13833 1.66452 1.70983C1.09302 2.28132 0.768859 3.05442 0.761836 3.8626C0.754813 4.67079 1.0655 5.44939 1.62697 6.03073L19.0639 23.4676C19.6419 24.0455 20.4258 24.3701 21.2431 24.3701C22.0604 24.3701 22.8443 24.0455 23.4223 23.4676L40.8592 6.03073C41.4371 5.45271 41.7617 4.66884 41.7617 3.85151C41.7617 3.03417 41.4371 2.25031 40.8592 1.67228Z",
  [DIRECTION.LEFT]:
    "M23.1588 40.1678C23.7366 39.5898 24.0612 38.8059 24.0612 37.9886C24.0612 37.1713 23.7366 36.3874 23.1588 35.8094L7.9011 20.5517L23.1588 5.29402C23.7203 4.71268 24.0309 3.93407 24.0239 3.12589C24.0169 2.3177 23.6927 1.54461 23.1212 0.973112C22.5497 0.401617 21.7766 0.0774523 20.9685 0.0704294C20.1603 0.0634065 19.3817 0.374091 18.8003 0.935568L1.36341 18.3725C0.785557 18.9505 0.460938 19.7344 0.460938 20.5517C0.460938 21.369 0.785557 22.1529 1.36341 22.7309L18.8003 40.1678C19.3783 40.7457 20.1622 41.0703 20.9795 41.0703C21.7969 41.0703 22.5807 40.7457 23.1588 40.1678Z",
};

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
}

const ArrowIcon = ({
  direction = DIRECTION.BOTTOM,
  ...props
}: ArrowIconProps) => {
  return (
    <StyledSVG
      {...props}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path[direction]} fill="#727272" />
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  cursor: pointer;
`;

export default ArrowIcon;
