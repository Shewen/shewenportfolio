import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-4'>
        <div className='max-w-[1000px] w-full grid  gap-8'>

        <div className='sm:text-center  pl-4'>
            <p className=' sm:text-right text-4xl font-bold inline text-[#9ea0a3]  items-center '>
            Reach Out!
            </p>
           
          </div> 


          <div className='sm:text-center  pl-4'>
            <p className='  sm:text-center inline  text-[#9ea0a3]  items-center justify-center  '>
            Are You Interested In A Web Developer That Loves Fun Builds And Projects?
             Hit Me<br/> Up. I'm Open To Freelance,Part Time And Junior Developer Roles.
              Get In Touch <br/>With Me.
            </p>
           
          </div>

          <div>

          </div>

        <div className='flex justify-center items-center'>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-white-600'>
            <a
              className='flex justify-between items-center w-full  text-gray-300'
              href='https://www.linkedin.com/in/oguntide-seun-3a55b0143'
            >
               <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center  bg-white-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Shewen'
            >
               <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center bg-white-600'>
            <a
              className='flex justify-between items-center w-full  text-gray-300'
              href='https://twitter.com/Shewenjj?t=freGDhMQvyjOxNBLCeuvVQ&s=09'
            >
               <FaTwitter size={30} />
            </a>
          </li>
            
          
          </div>
        
    
          </div>
         
         
    </div>
    
  )
}

export default Contact
