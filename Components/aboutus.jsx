"use client";

import React from "react";
import Lottie from "lottie-react";
import lottieanimation from "./aboutus.json";

const aboutus = () => {
  return (
    <Lottie
      animationData={lottieanimation}
      height={1000}
      width={1000}
      loop={true}
      // speed={0.1}
    />
  )
}

export default aboutus