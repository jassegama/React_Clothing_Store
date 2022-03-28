import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import "../components/Slider.css"
import styled from "styled-components"
import {sliderItems} from "../data"
import React, { useState } from "react";

const Wrapper = styled.div`
    transform: translateX(${(props) =>props.slideIndex * - 100}vw);
`;

const Arrow = styled.div`
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;


const Slider = () => {
    const  [slideIndex, setSlideIndex] = useState([0]);
    const HandleClick= (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex + 1 : 0 )
        }
};
    return (
        <div className="slider">
            <Arrow className="slider-arrow" direction = "left" onClick={()=>HandleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper className="wrapper" slideIndex ={slideIndex}>
                {sliderItems.map(item => (
                <div className="slide" backgound-color={item.bg} >
                    <div className="img-container">
                    <img src={item.img} alt="" className="slide-image"/>
                    </div>
                    <div className="slide-info">
                        <h1 className="slide-title">{item.title}</h1>
                        <p className="slide-description">{item.desc}</p>
                        <button className="slide-button">SHOP NOW</button>
                    </div>
                </div>
                ))};
            </Wrapper>
            <Arrow className="slider-arrow" direction = "right"onClick={()=>HandleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </div>
        
    )
}

export default Slider
