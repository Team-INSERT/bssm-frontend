import Link from "next/link";
import styled from "styled-components";

const Logo = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <StyledLink href="/">
      <StyledSVG
        {...props}
        cursor="pointer"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_301_72)">
          <rect
            x="2.32959"
            y="1.83215"
            width="4.86698"
            height="15.7241"
            rx="2.19424"
            fill="#E54F5A"
          />
          <rect
            x="14.0005"
            y="1.83215"
            width="4.86698"
            height="15.7241"
            rx="2.19424"
            fill="#E54F5A"
          />
          <path
            d="M2.32959 8.19678H18.8024V15.5564C18.8024 16.6609 17.907 17.5564 16.8024 17.5564H4.52383C3.31199 17.5564 2.32959 16.574 2.32959 15.3621V8.19678Z"
            fill="#E54F5A"
          />
        </g>
        <g filter="url(#filter1_d_301_72)">
          <path
            d="M8.83836 21.5472C9.61012 20.2242 11.5217 20.2242 12.2935 21.5472L18.7377 32.5944C19.5154 33.9277 18.5537 35.6022 17.0101 35.6022H4.12172C2.57814 35.6022 1.6164 33.9277 2.39416 32.5944L8.83836 21.5472Z"
            fill="#FEBC56"
          />
        </g>
        <g filter="url(#filter2_d_301_72)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.4594 20.2874C23.2475 20.2874 22.2651 21.2697 22.2651 22.4816V33.4079C22.2651 34.6198 23.2475 35.6022 24.4594 35.6022H35.3857C36.5976 35.6022 37.58 34.6198 37.58 33.4079V22.4816C37.58 21.2698 36.5976 20.2874 35.3857 20.2874H24.4594ZM30.0639 30.639C30.5338 30.639 30.9148 30.2581 30.9148 29.7882V26.1013C30.9148 25.6314 30.5338 25.2505 30.0639 25.2505C29.594 25.2505 29.2131 25.6314 29.2131 26.1013V29.7882C29.2131 30.2581 29.594 30.639 30.0639 30.639Z"
            fill="#27C3BC"
          />
        </g>
        <g filter="url(#filter3_d_301_72)">
          <path
            d="M28.1828 3.47599C28.9485 2.12211 30.8988 2.1221 31.6645 3.47599L38.0201 14.7134C38.7741 16.0467 37.8109 17.698 36.2792 17.698H23.568C22.0363 17.698 21.0731 16.0467 21.8272 14.7134L28.1828 3.47599Z"
            fill="#73AEE3"
          />
        </g>
        <rect
          x="7.87207"
          y="13.3918"
          width="1.70165"
          height="5.38855"
          rx="0.850823"
          transform="rotate(-90 7.87207 13.3918)"
          fill="#F5F5F5"
        />
        <defs>
          <filter
            id="filter0_d_301_72"
            x="0.574194"
            y="1.83215"
            width="20.0489"
            height="19.235"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.7554" />
            <feGaussianBlur stdDeviation="0.877698" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.571187 0 0 0 0 0.571187 0 0 0 0 0.571187 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_301_72"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_301_72"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_301_72"
            x="0.363257"
            y="20.5549"
            width="20.4053"
            height="18.558"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.7554" />
            <feGaussianBlur stdDeviation="0.877698" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.571187 0 0 0 0 0.571187 0 0 0 0 0.571187 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_301_72"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_301_72"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_301_72"
            x="20.5097"
            y="20.2874"
            width="18.8257"
            height="18.8256"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.7554" />
            <feGaussianBlur stdDeviation="0.877698" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.572549 0 0 0 0 0.572549 0 0 0 0 0.572549 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_301_72"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_301_72"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_301_72"
            x="19.8095"
            y="2.46057"
            width="20.2281"
            height="18.7482"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.7554" />
            <feGaussianBlur stdDeviation="0.877698" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45098 0 0 0 0 0.682353 0 0 0 0 0.890196 0 0 0 0.07 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_301_72"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_301_72"
              result="shape"
            />
          </filter>
        </defs>
      </StyledSVG>
    </StyledLink>
  );
};

const StyledSVG = styled.svg`
  @media screen and (max-width: 1025px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media screen and (max-width: 360px) {
    width: 22px;
    height: 22px;
  }
`;

const StyledLink = styled(Link)``;

export default Logo;
