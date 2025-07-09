import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

const AboutCount = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger animations when the component mounts
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 300); // Slight delay for a smooth start
      return () => clearTimeout(timer);
    }, []);
    return (
        <section className="single-page-hero-area sm:px-2   md:px-20 ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h2 className={`font-medium text-2xl ${ isVisible ? "slide-in" : "opacity-0"
        }`}>About me</h2>
                        <p className={` ${
          isVisible ? "fade-in" : "opacity-0"
        }`}>Full Stack Engineer with proficiency in Python and JavaScript (ES6+). Experienced in developing web applications using 
HTML5, CSS3, React.js, Node.js, and Express.js. Skilled in SQL (MySQL), NoSQL (MongoDB), and hands-on with Docker, AWS, 
RESTful APIs, and integrating Generative AI solutions. </p>
                    </div>
                </div>
                {/* <div className="row">
                    <Card count={"8"} title={"Years Of Experience"} />
                    <Card count={"1"} endOprion={"k"} title={"Complete Projects"} />
                    <Card count={"90"} title={"Client Satisfactions"} />
                    <Card count={"20"} title={"Cup of coffe"} />
                </div> */}
            </div>
        </section>
    )
}

export default AboutCount


const Card = ({ count, title, endOprion }) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="hero-counter-area wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                    <span className="count-text plus"><CountUp end={count}   />{endOprion}</span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </div>
    )
}