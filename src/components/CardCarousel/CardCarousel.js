import React, { useEffect, useState } from "react";

//===REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";

//===REACT ELESTIC CAROUSEL IMPORTS
import Carousel from "react-elastic-carousel";

//===COMPONENTS IMPORTS
import styles from "./CourseUnitCarousel.module.css";
import TourCard from "../Tours/TourCard";

const breakpoints = [
  { width: 1, itemsToShow: 1.2 },
  { width: 500, itemsToShow: 2.2 },
  { width: 780, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4.2 },
];

const CardCarousel = () => {
  const isLoading = useSelector((state) => state.tours.isLoading);
  const [selectedId, setSelectedId] = useState("");
  const dispatch = useDispatch();
  const tourList = useSelector((state) => state.tours.toursList);
  console.log(tourList)


  let FilteredTours = tourList;

  return (
    <Carousel
      className={`${styles.gpa__tours_carousel_wrapper}`}
      breakPoints={breakpoints}
      pagination={false}
      easing="ease"
      tiltEasing="ease"
    >
      {isLoading ? [...Array(8).keys()].map((index)=>{
        return <TourCard/>
      }):
      FilteredTours.slice(0,20).map((tour) => {
  
        return (
          <TourCard
            TourImage={tour.imageCover}
            TourTitle={tour.name}
            NumDays={tour.duration}
            NumNights={tour.duration - 1}
            TourDescription={tour.description}
            TourRating={tour.ratingsAverage}
        
          />
        );
      })}
    </Carousel>
  );
};
export default CardCarousel;