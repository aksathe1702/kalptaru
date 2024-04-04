import React from 'react';

function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_left">
                            <span>What We Do</span>
                            <h2>SERVICES WE OFFER</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="services_box_main">
                            <div className="services_box text_align_left">
                                <figure><img src={require('../../images/service1.jpg').default} alt="#" /></figure>
                                <div className="veget">
                                    <h3>FRESH<br />VEGETABLES</h3>
                                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <a className="read_more" href="services.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="services_box_main">
                            <div className="services_box text_align_left">
                                <figure><img src={require('../../images/service2.jpg').default} alt="#" /></figure>
                                <div className="veget">
                                    <h3>AGRICULTURE<br />PRODUCTS</h3>
                                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <a className="read_more" href="services.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="services_box_main">
                            <div className="services_box text_align_left">
                                <figure><img src={require('../../images/service3.jpg').default} alt="#" /></figure>
                                <div className="veget">
                                    <h3>ORGANIC<br />PRODUCTS</h3>
                                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <a className="read_more" href="services.html">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
