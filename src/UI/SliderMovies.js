import React from "react"
import CardMovie from "../Component/CardMovie"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './SliderMovies.css'

function SliderMovies({data, loanding}){

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
    
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            },
          ]
        };

    return(
        <section className="sliderMovies">
            <Slider {...settings}>
                {data.map((datM, index) => {
                    return(
                        <CardMovie data={datM} key={index} loanding={loanding}/>
                    )
                })}
            </Slider>
        </section>
    )
}

export default SliderMovies