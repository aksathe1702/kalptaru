import React from 'react';

function News() {
    return (
        <div className="news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_left">
                            <span>Our</span>
                            <h2>Latest News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="latest">
                            <figure><img src="images/news1.jpg" alt="#" /></figure>
                           
                            <div className="nostrud">
                                <h3>Alteration in somer</h3>
                                <p>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making iteditors </p>
                                <a className="read_more" href="news.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="latest box_desho">
                            <figure><img src="images/news2.jpg" alt="#" /></figure>
                           
                            <div className="nostrud">
                                <h3>Alteration in somer</h3>
                                <p>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making iteditors </p>
                                <a className="read_more" href="news.html">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="latest">
                            <figure><img src="images/news3.jpg" alt="#" /></figure>
                            
                            <div className="nostrud">
                                <h3>Alteration in somer</h3>
                                <p>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making iteditors </p>
                                <a className="read_more" href="news.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
