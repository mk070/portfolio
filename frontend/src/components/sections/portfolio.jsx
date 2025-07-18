import React, { useState } from 'react'
import workScribble from "../../assets/images/custom/work-scribble.svg"
import { projectsData } from '../../utlits/fackData/projectData'
import ImageSlider from '../ui/imageSlider';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openSlider = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeSlider = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="projects-area" id="portfolio">
                <div className="custom-icon">
                    <img src={workScribble} alt="custom" />
                </div>
                <div className="container-fluid">
                    <div className="row g-4 portfolio-grid">
                        {projectsData.map(({ category1, category2, id, size, src, title, link }, index) => {
                            return (
                                <div key={id} className={`${size === "large" ? "col-md-6 col-xl-6  " : "col-md-6 col-xl-4"} portfolio-item category-${id}`}>
                                    <div className="work-popup">
                                        <div onClick={() => window.location.href = link} className="  portfolio-box">
                                            <img src={src} alt="" data-rjs="2" />
                                            <div className="flex ">
                                                <span className="portfolio-category ">{category1}</span>
                                                {/* {category2 && <span className="portfolio-category ml-20">{category2}</span>} */}
                                            </div>
                                            <h1 className="portfolio-caption text-slate-900 text-xl font-semibold">{title}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <ImageSlider images={projectsData} isOpen={isOpen} onClose={closeSlider} currentIndex={currentIndex} />
        </>
    )
}

export default Portfolio

