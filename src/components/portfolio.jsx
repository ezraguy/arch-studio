import React, { useState, useEffect } from 'react';
import '../scss/portfolio.scss';

import seraphImg from '../images/portfolio-images/image-seraph.jpg';
import seraphImgT from '../images/portfolio-images/tablet/image-seraph.jpg';

import eebox from '../images/portfolio-images/image-eebox.jpg';
import eeboxT from '../images/portfolio-images/tablet/image-eebox.jpg';

import federal from '../images/portfolio-images/image-federal.jpg';
import federalT from '../images/portfolio-images/tablet/image-federal.jpg';

import deSol from '../images/portfolio-images/image-del-sol.jpg';
import deSolT from '../images/portfolio-images/tablet/image-del-sol.jpg';

import prototype from '../images/portfolio-images/image-prototype.jpg';
import prototypeT from '../images/portfolio-images/tablet/image-prototype.jpg';

import bTower from '../images/portfolio-images/image-228b.jpg';
import bTowerT from '../images/portfolio-images/tablet/image-228b.jpg';

import edelweiss from '../images/portfolio-images/image-edelweiss.jpg';
import edelweissT from '../images/portfolio-images/tablet/image-edelweiss.jpg';

import netcry from '../images/portfolio-images/image-netcry.jpg';
import netcryT from '../images/portfolio-images/tablet/image-netcry.jpg';

import hypers from '../images/portfolio-images/image-hypers.jpg';
import hypersT from '../images/portfolio-images/tablet/image-hypers.jpg';

import sxiv from '../images/portfolio-images/image-sxiv.jpg';
import sxivT from '../images/portfolio-images/tablet/image-sxiv.jpg';

import trinity from '../images/portfolio-images/image-trinity.jpg';
import trinityT from '../images/portfolio-images/tablet/image-trinity.jpg';

import paramour from '../images/portfolio-images/image-paramour.jpg';
import paramourT from '../images/portfolio-images/tablet/image-paramour.jpg';

const Portfolio = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    const [projects] = useState([
        { id: 1, src: seraphImg, srcT: seraphImgT, title: 'Seraph Station', date: 'september 2019' },
        { id: 2, src: eebox, srcT: eeboxT, title: 'eebox building', date: 'august 2017' },
        { id: 3, src: federal, srcT: federalT, title: 'federal || Tower', date: 'march 2017' },
        { id: 4, src: deSol, srcT: deSolT, title: 'project del sol', date: 'january 2016' },
        { id: 5, src: prototype, srcT: prototypeT, title: 'le prototype', date: 'october 2015' },
        { id: 6, src: bTower, srcT: bTowerT, title: '228B tower ', date: 'april 2015' },
        { id: 7, src: edelweiss, srcT: edelweissT, title: 'grand edelweiss hotel', date: 'december 2013' },
        { id: 8, src: netcry, srcT: netcryT, title: 'netcry tower', date: 'august 2012' },
        { id: 9, src: hypers, srcT: hypersT, title: 'hypers', date: 'january 2012' },
        { id: 10, src: sxiv, srcT: sxivT, title: 'SXIV Tower', date: 'march 2011' },
        { id: 11, src: trinity, srcT: trinityT, title: 'trinity bank tower', date: 'september 2010' },
        { id: 12, src: paramour, srcT: paramourT, title: 'project paramour', date: 'february 2008' },
    ]);
    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenWidth(screenWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, [])
    return (
        <div className="portfolio">
            {projects.map((project) => {
                return (
                    <div className="project" key={project.id}>
                        {screenWidth < 900 && screenWidth > 550 && <img src={project.srcT} className="project-img" alt="" />}
                        {screenWidth >= 900 && <img src={project.src} className="project-img" alt="" />}
                        {screenWidth < 550 && <img src={project.src} className="project-img" alt="" />}

                        <div className="project-title">{project.title}</div>
                        <div className="project-text">{project.date}</div>
                    </div>
                )

            })}
        </div>
    );
}

export default Portfolio;