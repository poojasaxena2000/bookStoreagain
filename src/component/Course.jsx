import React, { useEffect, useState } from 'react';
// import list from '../component/data/list.json';
import Cards from '../component/Cards';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Course = () => {

   const [book,setBook]=useState([])

   useEffect(()=>{
    const getBook=async()=>{

       try{
         const res  = await axios.get("http://localhost:4001/book");
         setBook(res.data)
         console.log(res.data)

       }catch(error){
        console.log(error)

       }
    }
    getBook();
   },[])

  return (
   <>
   
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We're delight to have you {" "}

          <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>A room without books is like a body without a soul.”
At BookNest, we believe in making the world of books more accessible, enjoyable, and personalized for every reader
Step into the world of books where stories come alive, knowledge flows, and curiosity is never-ending. Whether you're searching for timeless classics, trending titles, or educational resources — BookNest brings your next favorite book just a click away.
        </p>
     


     <Link to='/'>
     
      <button className='bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
     </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {

        book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
      </div>

    </div>
   </>
  )
}

export default Course
