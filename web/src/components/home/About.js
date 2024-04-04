import React from 'react';

function About() {
    return (
        <div className="about">
            <div className="container-fluid">
                <div className="row d_flex">
                    <div className="col-lg-6 col-md-12">
                        <div className="titlepage text_align_left">
                            <span>About Us</span>
                            <h2>AGRICULTURE MARKET</h2>
                            <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that itfact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that itfact th</p>
                            <a className="read_more" href="about.html">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row d_flex">
                            <div className="col-md-7">
                                <div className="about_img">
                                    <img src={require('./about_img.jpg').default} alt="#" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="about_img">
                                    <img src={require('./about_img.jpg').default} alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
