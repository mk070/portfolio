import { RiGlobalFill, RiPantoneFill, RiQuillPenLine ,RiCodeSSlashFill, RiPaintBrushFill, RiServerFill} from '@remixicon/react'
import React from 'react'

const Services = () => {
    return (
        <section id="services" className=" md:px-20 services-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Services</h2>
                                <p>I provide expert full-stack development, integrating cutting-edge technologies like AI, cloud hosting, and Docker. From scalable web applications to tailored software solutions, I ensure every project meets the highest standards. Let’s turn your ideas into impactful digital experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <Card

                        description={"I provide all kinds of web development services including CMS, CRM, eCommerce platforms, and landing pages."}
                        icon={<RiCodeSSlashFill size={55} />}
                        title={"Website Development"} 
                        />
                        <Card
                        description={"Crafting visually appealing and user-friendly web designs tailored to your needs."}
                        icon={<RiPaintBrushFill size={55} />}
                        title={"Web Design"} 
                        />
                        <Card
                        description={"Reliable and scalable web hosting solutions to keep your website running smoothly."}
                        icon={<RiServerFill size={55} />}
                        title={"Web Hosting"} 
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

const Card = ({ title, description, icon }) => {
    return (
        <div className="col-lg-4 mb-4 md:mb-0 h-64 col-md-4">
            <div className="service-item wow h-full fadeInUp delay-0-2s">
                <div className="content">
                    <i>{icon}</i>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}