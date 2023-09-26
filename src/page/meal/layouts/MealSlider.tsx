import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const MealSlider = () => {
  return (
    <Container>
      <MealList>
        {/* <Slider {...settings}>
          {Array.from({ length: 10 }).map((_, i) => (
            <MealListItem key={i} />
          ))}
        </Slider> */}
      </MealList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const MealList = styled.div`
  width: 100%;
  height: 68vh;
  overflow: hidden;
`;

export default MealSlider;
