import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import MealListItem from "./MealListItem";
import SwipeArea from "./SwipeArea";
import MealListType from "../type/mealList.type";

const ListSlider = ({ mealList }: MealListType) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [slideSpeed, setSlideSpeed] = React.useState(300);

  const handleBeforeChange = (current: number, next: number) => {
    setCurrentSlideIndex(next);
  };

  const sliderRef = React.useRef<Slider>(null);

  const nextSlide = () => {
    if (currentSlideIndex === mealList.length - 3) return setSlideSpeed(0);
    // handleCurrentSlide(0);
    setSlideSpeed(300);
    if (sliderRef.current) return sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    if (!currentSlideIndex) return setSlideSpeed(0);
    // handleCurrentSlide(list.length - 3);
    setSlideSpeed(300);
    if (sliderRef.current) return sliderRef.current.slickPrev();
  };

  const handleCurrentSlide = (index: number) => {
    if (sliderRef.current) return sliderRef.current.slickGoTo(index);
  };

  const settings = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: slideSpeed,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "70vh",
    beforeChange: handleBeforeChange,
    swipe: false,
  };

  return (
    <Container>
      <SwipeArea next={nextSlide} prev={prevSlide} />
      <CustomSlider {...settings} ref={sliderRef}>
        {mealList.map((item: any) => (
          <MealListItem
            key={item.date}
            date={item.date}
            menu={item.menu}
            currentSlideIndex={currentSlideIndex}
          />
        ))}
      </CustomSlider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const CustomSlider = styled(Slider)`
  width: 100%;
  height: 90%;

  .slick-list {
    transform: translateY(-50%);
  }
`;

export default ListSlider;
