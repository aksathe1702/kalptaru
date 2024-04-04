import React from 'react';
import ImgSlider from './Slider';
import About from './About';
import Services from './Services';
import ChooseUs from './ChooseUs';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';
import '../../css/style.css';
import Header from './Header';
import Testimonial from './Testinomial';


function Home() {
  return (
    <div className="home">
       
       
<Header/>
      <ImgSlider />
      <About />
      <Services/>
      <Testimonial />
      <ChooseUs />
      <News/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
