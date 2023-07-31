
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello, my name is Oluwaseun, I'm a Front-End Developer.
                </p>
            </div>
            <div>
              <p>I have two years experience using various front-end technologies
                I am passionate about building excellent webpage for clients
                 ranging from individuals and small-businesses all the
              way to large enterprise corporations.
              Some of the few technologies i've worked with and still use: <br/>
              <strong>HTML</strong>   <strong>CSS </strong>  <strong>JAVASCRIPT</strong> <strong>REACT</strong>   <strong>REDUX </strong>  <strong>TAILWIND</strong>
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;