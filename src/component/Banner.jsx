import React from 'react'
// import heroImage from '../../public/Hero.jpg';

const Banner = () => {
  return (
   <>
   
   <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

     <div className='  order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
     <div className='space-y-12'>
        <h1  className='text-4xl font-bold'>Hello , welcome here to learn something{'  '}     

        <span className='text-pink-400'>new everyday !!!</span>
     </h1>
     <p className='text-xl'>BookNest is an intuitive and modern online bookstore where book lovers can discover, explore, and enjoy thousands of titles across genres — all in one beautifully crafted platform. Whether you're a fan of fiction, a tech enthusiast, or a student looking for academic books, BookNest has something for everyone</p>



         <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Email" required />
</label>

    
 </div>
<button className="btn btn-secondary mt-6">Get Started</button>
    

     </div>

     <div className='order-1 w-full md:w-1/2 '>
    <img src="/banner.jpg" alt="" className='' />
     
     
     </div>
   </div>
   
   </>
  )
}

export default Banner
