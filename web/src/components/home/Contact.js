import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="titlepage text_align_center">
                            <span>Our Contact</span>
                            <h2>Request A Call Back</h2>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <form id="request" className="main_form">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input className="form_control" placeholder="Your Name" type="text" name="Name" />
                                </div>
                                <div className="col-md-12">
                                    <input className="form_control" placeholder="Phone Number" type="text" name="Phone Number" />
                                </div>
                                <div className="col-md-12">
                                    <input className="textarea" placeholder="Message" type="text" name="message" />
                                </div>
                                <div className="col-md-12">
                                    <div className="group_btn">
                                        <button className="send_btn">Send</button>
                                        <button className="send_btn">Location</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map-responsive">
            <iframe src="https://www.google.com/maps/d/embed?mid=13cuglFU7PkLXxp1_3N8aNQMLwyw&hl=en&ehbc=2E312F" width="100%" height="480"></iframe>
             </div>
        </div>
    );
}

export default Contact;
