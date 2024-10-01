import React from 'react'
import { project } from '../../data/projects'
import CircleIcon from '@mui/icons-material/Circle';

const Projects = () => {
  return (
    <div className="flex flex-col relative min-h-screen py-16 px-4 dark:text-black justify-center items-center">
      <h2 className="text-3xl uppercase tracking-[10px] md:tracking-[20px] lg:tracking-[25px] text-gray-400 text-center mb-8">
        Projects
      </h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {project.map((val, index) => (
          <card key={index} className='flex flex-col border-2 border-gray-100 rounded-xl bg-[#e1e2e1] w-full max-w-[300px] md:max-w-[400px] overflow-hidden'>
            <div className='h-[200px] md:h-[300px] w-full'>
              <img className="w-full h-full object-cover rounded-t-xl" src={val.image} alt={val.name} />
            </div>
            <div className='flex flex-col bg-[#e1e2e2] gap-4 p-6'>
              <h4 className='font-bold text-xl'>{val.name}</h4>
              <div className='flex items-center space-x-4'>
                <a className="font-medium text-sm underline flex items-center" href={val.github} target='_blank' rel="noopener noreferrer">
                  Github
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1" width="16" height="16" viewBox="0 0 32 32">
                    <path d="M18 5v2h5.56L11.28 19.28l1.44 1.44L25 8.44V14h2V5h-9zM5 9v18h18V14l-2 2v9H7V11h9l2-2H5z"></path>
                  </svg>
                </a>
                <div className='flex items-center'>
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1fd655] opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-[#1fd655]"></span>
                  </span>
                  <span className='text-sm font-medium ml-1'>Building</span>
                </div>
              </div>
              <p className='text-sm leading-relaxed md:text-lg lg:text-base'>
                {val.description}
              </p>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Tech Stack:</span>
                {Object.entries(val.stack).map(([key, value]) => (
                  <div key={key} className='flex items-center justify-center bg-gray-200 rounded px-2 py-1'>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </card>
        ))}
      </div>
    </div>
  )
}

export default Projects