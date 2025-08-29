// import React from 'react'
import React, { useEffect, useState } from 'react';
// import  list from './data/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Slider from "react-slick";

import Cards from './Cards';

const Freebook = () => {


  const [book,setBook]=useState([])

   useEffect(()=>{
    const getBook=async()=>{

       try{
         const res  = await axios.get("http://localhost:4001/book");
         setBook(res.data.filter((data)=>data.category === "Free"))
         console.log(res.data)

       }catch(error){
        console.log(error)

       }
    }
    getBook();
   },[])
   
    // here we filter the json data which we creat 



    // const filterData=list.filter((newData)=>newData.category === 'Free');

    // console.log(filterData)


const settings = {
  dots: true,
  infinite: true, // enable infinite to allow dot click navigation
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1, // allow smoother navigation
  arrows: true, // optional, adds left/right navigation
  appendDots: dots => (
    <div style={{ position: "absolute", bottom: "-25px", zIndex: 10 }}>
      <ul>{dots}</ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
};




  return (
   <>
   
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div>

        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses </h1>
    
       <p>At BookNest, we’re passionate about connecting people with the stories and knowledge that matter most.
Our mission is to create a digital haven for book lovers by offering a seamless and enjoyable online bookstore experience. Designed by readers, for readers — our platform is built with love, creativity, and modern technology..</p>
      </div>

    <div className="">
        

         <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
      </Slider>
    </div>

    </div>



    
    
    </>
  )
}

export default Freebook
