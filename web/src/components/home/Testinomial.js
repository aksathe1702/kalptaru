import React from 'react';

function Customers() {
    return (
        <div className="customers">
            <div className="clients_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="titlepage text_align_left">
                                <span>Our Customers</span>
                                <h2>TESTIMONAILS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start slider section */}
            <div id="myCarousel" className="carousel slide clients_banner" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="carousel-caption relative">
                                <div className="row d_flex">
                                    <div className="col-md-6">
                                        <div className="custom">
                                            <div className="d_flex">
                                                <i><img src="images/customer1.jpg" alt="#"/></i>
                                                <div className="clint">
                                                  <h4>Dan Balan</h4>
                                                  <span>Client</span>
                                                </div>
                                            </div>
                                            <p>readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                            <img src="images/test.png" alt="#"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="custom">
                                            <div className="d_flex">
                                                <i><img src="images/customer2.jpg" alt="#"/></i>
                                                <div className="clint">
                                                  <h4>Mor Balan</h4>
                                                  <span>Client</span>
                                                </div>
                                            </div>
                                            <p>readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                            <img src="images/test.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption relative">
                              <div className="row d_flex">
                                  <div className="col-md-6">
                                      <div className="custom">
                                          <div className="d_flex">
                                              <i><img src="images/customer1.jpg" alt="#"/></i>
                                              <div className="clint">
                                                <h4>Dan Balan</h4>
                                                <span>Client</span>
                                              </div>
                                          </div>
                                          <p>readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                          <img src="images/test.png" alt="#"/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="custom">
                                          <div className="d_flex">
                                              <i><img src="images/customer2.jpg" alt="#"/></i>
                                              <div className="clint">
                                                <h4>Mor Balan</h4>
                                                <span>Client</span>
                                              </div>
                                          </div>
                                          <p>readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                          <img src="images/test.png" alt="#"/>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption relative">
                              <div className="row d_flex">
                                  <div className="col-md-6">
                                      <div className="custom">
                                          <div className="d_flex">
                                              <i><img src="images/customer1.jpg" alt="#"/></i>
                                              <div className="clint">
                                                <h4>Dan Balan</h4>
                                                <span>Client</span>
                                              </div>
                                          </div>
                                          <p>readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                          <img src="images/test.png" alt="#"/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="custom">
                                          <div className="d_flex">
                                              <i><img src="images/customer2.jpg" alt="#"/></i>
                                              <div className="clint">
                                                <h4>Mor Balan</h4>
                                                <span>Client</span>
                                              </div>
                                          </div>
                                          <p>readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their </p>
                                          <img src="images/test.png" alt="#"/>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

function Testimonial() {
    return (
        <div className="testimonial">
            <Customers />
        </div>
    );
}

export default Testimonial;
