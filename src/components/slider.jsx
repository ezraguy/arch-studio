import React, { useState, useEffect } from 'react';
import '../scss/slider.scss';
import '../scss/general.scss';

import firstSlide from '../images/home-images/desktop/image-hero-paramour.jpg';
import secondSlide from '../images/home-images/desktop/image-hero-seraph.jpg';
import thirdSlide from '../images/home-images/desktop/image-hero-federal.jpg';
import fourthSlide from '../images/home-images/desktop/image-hero-trinity.jpg';

import firstSlideTablet from '../images/home-images/desktop/image-hero-paramour.jpg';
import secondSlideTablet from '../images/home-images/desktop/image-hero-seraph.jpg';
import thirdSlideTablet from '../images/home-images/desktop/image-hero-federal.jpg';
import fourthSlideTablet from '../images/home-images/desktop/image-hero-trinity.jpg';

import firstSlideMobile from '../images/home-images/desktop/image-hero-paramour.jpg';
import secondSlideMobile from '../images/home-images/desktop/image-hero-seraph.jpg';
import thirdSlideMobile from '../images/home-images/desktop/image-hero-federal.jpg';
import fourthSlideMobile from '../images/home-images/desktop/image-hero-trinity.jpg';

import arrow from '../images/icons/icon-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import SwiperCore, { EffectFade } from 'swiper';




const Slider = () => {

    SwiperCore.use([EffectFade]);
    const [screenWidth, setScreenWidth] = useState(0);
    const [swiper, setSwiper] = useState({});
    const [projects, setProjects] = useState([
        {
            id: 1, title: 'Project Paramour', text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. ', src: firstSlide,
            srcTablet: firstSlideTablet, srcMobile: firstSlideMobile, btnClass: 'slider-item slider-item-active'
        }
        ,
        { id: 2, title: 'Seraph Station', text: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.', src: secondSlide, srcTablet: secondSlideTablet, srcMobile: secondSlideMobile, btnClass: 'slider-item' },

        { id: 3, title: 'Federal II Tower', text: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.', src: thirdSlide, srcTablet: thirdSlideTablet, srcMobile: thirdSlideMobile, btnClass: 'slider-item' },

        { id: 4, title: 'Trinity Bank Tower', text: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.', src: fourthSlide, srcTablet: fourthSlideTablet, srcMobile: fourthSlideMobile, btnClass: 'slider-item' },


    ]);

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenWidth(screenWidth)
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

    }, [])



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
                effect="fade"
                onSwiper={(swiper) => swiperInit(swiper)}
            >


                {projects.map((item) => {
                    return (
                        <SwiperSlide key={item.id} >
                            <div className="main" >
                                {
                                    screenWidth <= 375 &&
                                    <img src={item.srcMobile} className="project-img" alt="project" />

                                }
                                {
                                    screenWidth > 376 && screenWidth <= 1000 &&
                                    < img src={item.srcTablet} className="project-img" alt="project" />

                                }
                                {
                                    screenWidth > 1000 &&
                                    <img src={item.src} className="project-img" alt="project" />

                                }
                                <div className="content">

                                    <div className="project-title">{item.title}</div>
                                    <div className="project-text">{item.text}</div>
                                    <div className="show-portfolio-wrap">
                                        <button

                                            className="main-btn">See Our portfolio
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