import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import MealListItem from "./MealListItem";

const MealSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    swipe: true,
    swipeToSlide: true,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: (currentSlide: number) => {
      console.log("after change", currentSlide);
    },
  };

  return (
    <Container>
      <MealList>
        <Slider {...settings}>
          {Array.from({ length: 10 }).map((_, i) => (
            <MealListItem key={i} />
          ))}
        </Slider>
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
