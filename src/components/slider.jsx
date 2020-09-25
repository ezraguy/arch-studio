import React, { useState } from 'react';
import '../scss/slider.scss';
import firstSlide from '../images/home-images/desktop/image-hero-paramour.jpg';
import arrow from '../images/icons/icon-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';



const Slider = () => {
    const [swiper, setSwiper] = useState({});
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project Paramour', text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. ', src: firstSlide, btnClass: 'slider-item slider-item-active' }
        ,
        { id: 2, title: 'Project Paramour', text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. ', src: firstSlide, btnClass: 'slider-item' },
        { id: 3, title: 'Project Paramour', text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. ', src: firstSlide, btnClass: 'slider-item' },
        { id: 4, title: 'Project Paramour', text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. ', src: firstSlide, btnClass: 'slider-item' },


    ]);

    const changeBtnClass = (index) => {

        let tempArr = [...projects];
        for (let i = 0; i < tempArr.length; i++) {
            if (i === index) {
                let item = tempArr[index];
                item.btnClass = 'slider-item slider-item-active';
            }
            else
                tempArr[i].btnClass = 'slider-item';

        }

        setProjects(tempArr)
    }



    const swiperInit = (swiper) => {
        setSwiper(swiper);

    }

    const handleSlide = (index) => {
        swiper.slideTo(index);
        changeBtnClass(index);
    }
    return (
        <div className="slider">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                allowTouchMove={false}
                onSwiper={(swiper) => swiperInit(swiper)}
            >


                {projects.map((item) => {
                    return (
                        <SwiperSlide key={item.id} >
                            <div className="main" >
                                <img src={item.src} className="project-img" alt="project" />
                                <div className="content">

                                    <div className="project-title">{item.title}</div>
                                    <div className="project-text">{item.text}</div>
                                    <div className="show-portfolio-wrap">
                                        <button

                                            className="show-portfolio">See Our portfolio
                                <img src={arrow} className="arrow" alt="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="number-slider">
                {projects.map((item, index) => {
                    return <button key={index}

                        onClick={() => handleSlide(index)}
                        className={item.btnClass}>0{index + 1}</button>
                })}
            </div>
        </div>
    );
}


export default Slider;