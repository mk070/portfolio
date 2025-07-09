import React from 'react';
import profile from "../../../assets/images/about/me.jpg";
import react from '../../../assets/icons/react.png';
import nodejs from '../../../assets/icons/nodejs.png';
import python from '../../../assets/icons/python.png';
import mongodb from '../../../assets/icons/mongodb.png';
import django from '../../../assets/icons/django.png';
import docker from '../../../assets/icons/docker.png';
import aws from '../../../assets/icons/aws.png';
import tailwindcss from '../../../assets/icons/tailwindcss.png';
import expressjs from '../../../assets/icons/expressjs.png';



const TechIcon = ({ icon: Icon, name, delay,w }) => {
  return (
    <div 
      className="tech-icon-wrapper animate-float"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative group">
        <div className="tech-icon">
          <img src={Icon} width={w} alt="" srcset="" />
        </div>
        <span className="tech-label">{name}</span>
      </div>
    </div>
  );
};

const Summary = () => {
    return (
        <section id="about" className="md:px-20 about-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="tech-stack-container">
                                <div className="tech-icons-grid">
                                    <TechIcon icon={react} w='50' name="React" delay={0} />
                                    <TechIcon icon={nodejs}w='50' name="Node.js" delay={0.2} />
                                    <TechIcon icon={python} w='50'name="Python" delay={0.4} />
                                    <TechIcon icon={mongodb}w='30' name="MongoDB" delay={0.6} />
                                    <TechIcon icon={docker}w='80' name="Docker" delay={0.8} />
                                    <TechIcon icon={django} w='40'name="Django" delay={1} />
                                    <TechIcon icon={tailwindcss} w='50'name="Tailwindcss" delay={1} />
                                    <TechIcon icon={aws} w='50'name="AWS" delay={1} />
                                    <TechIcon icon={expressjs} w='50'name="AWS" delay={1} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-content-part wow fadeInUp delay-0-5s">
                                <h2 className='text-2xl'>
                                    My journey in <span>Full-stack development</span> <span> focuses</span> on meaningful <span> digital</span> impact.
                                </h2>
                                <p className='mt-4 mb-6 leading-7 text-base w-[98%] md:w-[90%]'>
                                    Hello! I'm Madhan, a versatile full-stack developer with a passion for technology and problem-solving. With expertise in front-end and back-end development, I specialize in creating innovative web solutions using cutting-edge technologies like React, Node.js, Python, and Docker. I also integrate AI solutions and work with cloud hosting platforms to deliver scalable applications.
                                </p>
                                <p className='text-base w-[98%] md:w-[90%] leading-7'>
                                    I started my journey in software development driven by curiosity and a desire to bring impactful solutions to life. Over the years, I've honed my skills in building everything from dynamic websites to sophisticated backend systems. Whether it's working on a small project or handling large-scale web applications, I thrive on solving complex challenges and turning visions into reality.
                                </p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;