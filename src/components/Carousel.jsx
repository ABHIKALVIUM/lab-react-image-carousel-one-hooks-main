import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const totalImages = images.length;

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left-btn"
          onClick={() => {
            setCurrImg(currImg === 0 ? totalImages - 1 : currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 20 }} />
        </div>
        <div className="center-btn">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className="right-btn"
          onClick={() => {
            setCurrImg(currImg < totalImages - 1 ? currImg + 1 : 0);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
