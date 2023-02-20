import React, { useState } from "react"

import "./slider.scss"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const Slider = ({
  index,
  image,
  content,
  current,
  textColor,
  backgroundColor,
  person,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="slider">
      <div className="slider-image-container">
        <img src={image} alt="" />
      </div>
      <div
        className="slider-content-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="slider-content" style={{ color: textColor }}>
          "{content}"
        </div>
        <div className="slider-person" style={{ color: textColor }}>
          {person}
        </div>
      </div>
    </div>
  )
}

export default Slider
