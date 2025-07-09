import { RiDownloadLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="call-to-action-area sm:px-0 md:px-20">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <div className="call-to-action-part wow fadeInUp flex flex-col justify-center items-center delay-0-2s text-center">
                            <h2>Are You Ready to kickstart your project?</h2>
                            <p>Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of Development and deliver exceptional work.</p>
                            <div className="hero-btns">
                                <Link to="/contact" className="theme-btn flex w-40 hover:flex call-to-action-button">Let's Talk <i><RiDownloadLine size={16}/></i></Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default CallToAction