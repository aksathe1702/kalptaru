import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="hedingh3 text_align_left">
                                <h3>Newsletter</h3>
                                <form id="colof" className="form_subscri">
                                    <input className="newsl" placeholder="Enter Email" type="text" name="Email" />
                                    <button className="subsci_btn"><img src="images/new.png" alt="#" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hedingh3 text_align_left">
                                <h3> Explore</h3>
                                <ul className="menu_footer">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="service.html">Service</a></li>
                                    <li><a href="Javascript:void(0)">Projects</a></li>
                                    <li><a href="testimonail.html">Testimonail</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hedingh3 text_align_left">
                                <h3>Recent Posts</h3>
                                <ul className="recent">
                                    <li><img src="images/resent.jpg" alt="#" />ea commodo consequat. Duis aute </li>
                                    <li><img src="images/resent.jpg" alt="#" />ea commodo consequat. Duis aute </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hedingh3 flot_right text_align_left">
                                <h3>ContacT</h3>
                                <ul className="top_infomation">
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>
                                        +01 1234567892
                                    </li>
                                    <li><i className="fa fa-envelope" aria-hidden="true"></i>
                                        <a href="Javascript:void(0)">demo@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="row d_flex">
                            <div className="col-md-8">
                                <p>© 2022 All Rights Reserved. Design by <a href="https://html.design/"> Free html Templates</a></p>
                            </div>
                            <div className="col-md-4">
                                <ul className="social_icon ">
                                    <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="Javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="Javascript:void(0)"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
