import React from "react";
// import { Carousel } from "react-responsive-carousel";
import first from "../styles/images/Image from iOS (1).jpg";
import sec from "../styles/images/Image from iOS (2).jpg";
import third from "../styles/images/Image from iOS (3) - Copy.jpg";
import fourth from "../styles/images/Image from iOS.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
export default () => (
  <Carousel
    responsive={responsive}
    showDots={true}
    removeArrowOnDeviceType={("tablet", "mobile", "desktop")}
    autoPlay={true}
    autoPlaySpeed={3000}
    infinite={true}
    focusOnSelect={true}
    transitionDuration={1000}
  >
    <div className="item">
      <img alt="" src={first} />
    </div>
    <div className="item">
      <img alt="" src={sec} />
    </div>
    <div className="item">
      <img alt="" src={third} />
    </div>
    <div className="item">
      <img alt="" src={fourth} />
    </div>
    <div className="item">
      <img alt="" src={first} />
    </div>
  </Carousel>
);
