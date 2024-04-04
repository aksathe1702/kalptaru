import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    // Visite the react slick for refrence  
    let setting = {
        //dots : true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToSchroll: 1,
        autoplay: true,
        //height : 700
    }
    const [text, setText] = useState("");
    const [fullText, setFullText] = useState(
        "EliteBridge"
    );
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText((prevText) => prevText + fullText[index]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 800);
        }
    }, [index]);


    return (

        <Container>
           
            <Carousel {...setting}>

                <Wrap>
                    {/* <video src ="videos/33b277f6-db0b-45ee-8bc7-9be0de581f5b.mp4"/> */}
                    <img src="\public\images\banner.jpg" alt='Image' />

                </Wrap>
                <Wrap>
                    <img src="\public\banner.jpg" alt='Image' />
                </Wrap>
                <Wrap>
                    <img src="./banner.jpg" alt='Image' />
                </Wrap>
                <Wrap>
                    <img src="https://www.pexels.com/photo/turned-on-imac-beside-macbook-on-table-39284/" alt='Image' />
                </Wrap>

            </Carousel>
            <div class="container-fluid">
                              <div class="row">
                                 <div class="col-md-12">
                                    <div class="willom">
                                      <h1> Agriculture Fram</h1>
                                    </div>
                                 </div>
                              </div>
                           </div>
        </Container>


    )
}

export default ImgSlider

const Container = styled.div`
   
`


const Carousel = styled(Slider)`

    //margin-top: 20px;
    overflow-x: hidden;
   // overflow-y: hidden;
    min-height:650px;
    overflow-y: visible;
   
   // position: fixed;

   @media screen and (min-width:250px) and (max-width:420px) 
{
    min-height:250px;
}

@media screen and (min-width:780px) and (max-width:912px){
    
    min-height:470px;
}

   

    ul li button{
        &before{
           font-size: 10px;
           color: white;
        }
    }
    //inbult in react slick go to that white dot and inscept u see they created 3 buttons
    li.slick-active button::before{
        color:white;
    }
    .slick-list{
        overflow:visible;
        @media screen and (max-widht:768px){
            max-height:300px;
   } 
    }

    button{
        z-index: 1; //-1 means at last layer & 1 means At TOp
    }
`
const Wrap = styled.div`
    cursor: pointer;
  

    img{
        border: none;
        max-height:700px;
        width : 100%;
        height: 100%;
        /* border-radius: 10px; */
        //box-shadow:  0 26px 30px -10px black;
        //rgb(0 0 0 / 69%) 0px 26px 30px -10px rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: 400ms;
       // overflow-y: hidden;
}

@media screen and (max-widht:768px){
    height:100px;
   }
@media screen and (min-width:250px) and (max-width:420px) 
{
}



/* @media screen and (min-width:405px) and (max-width:460px) 
{

}


@media screen and (min-width:405px) and (max-width:460px) 
{

} */



@media screen and (min-width:570px) and (max-width:768px){

}


@media screen and (min-width:780px) and (max-width:912px){

}



@media screen and (min-width:1010px) and (max-width:1024px)
{

}

`