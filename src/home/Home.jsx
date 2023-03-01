import React, { useState } from 'react'
import "./home.css"
import { motion } from 'framer-motion'
import { TbArrowBarToLeft,TbArrowBarToRight } from "react-icons/tb"
import img1 from "../assets/1.png"
import img2 from "../assets/proj_1.png"
import img3 from "../assets/proj_3.png"

const slides = [
  { url: img1, alt: "Image 1" },
  { url: img2, alt: "Image 2" },
  { url: img3, alt: "Image 3" },
]

const Home = () => {
  const [position, setPosition] = useState(1)

  const onRight = () => {
    if (position < slides.length - 1) {
      setPosition(position + 1);
    }
  }
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  }

  return (
    <div className='home'>
      <div style={{ position: "absolute",}} className="slider_image">
          <button onClick={onLeft} className={position < 1 ? "hide" : "left_slide"}><TbArrowBarToLeft className='slider_btn'/></button>
          <button onClick={onRight} className={position > slides.length - 2 ? "hide" : "right_slide"}><TbArrowBarToRight className='slider_btn'/></button>
        </div>
      <div className="row">
        {
          slides.map((slide, index) =>
            <motion.div className="container" key={index} initial={{ scale: 0, rotation: -180, }} animate={{ rotate: 0, left: `${(index - position) * 50 - 25}vw`, scale: index === position ? 1 : 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <img src={slide.url} alt="" />
            </motion.div>
          )
        }
      </div>
    </div>
  )
}

export default Home