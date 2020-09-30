import React from 'react'
import Slider from './slider';
import '../scss/main.scss';
import Featured from './featured';
import Welcome from './welcome';
const Main = () => {
    return (
        <div className="main">

            <Slider />
            <Welcome />
            <Featured />
        </div>
    );
}

export default Main;