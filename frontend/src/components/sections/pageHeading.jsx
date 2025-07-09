import React, { useEffect, useState } from 'react'

const PageHeading = ({heading, description}) => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger animations when the component mounts
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 300); // Slight delay for a smooth start
      return () => clearTimeout(timer);
    }, []);
    return (
        <section className="single-page-hero-area md:px-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h2 className={`font-medium text-2xl ${ isVisible ? "slide-in" : "opacity-0"}`}>{heading}</h2>
                        <p className={` ${ isVisible ? "fade-in" : "opacity-0"}`}>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeading