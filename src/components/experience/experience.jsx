import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          {/* <h3>Tech Stack</h3> */}
          <div className="experience__content"></div>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>Java</h4>
            <small className='text-light'></small>
            </div>
            </article>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'></small>
            </div>
            </article>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>React</h4>
            <small className='text-light'></small>
            </div>
            </article>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>C</h4>
            <small className='text-light'></small>
            </div>
            </article>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'></small>
            </div>
            </article>
        </div>
          {/* END OF FRONTEND */}
         <div className="experience__backend">
         {/* <h3> Tech Stack</h3> */}
          <div className="experience__content"></div>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'></small>
            </div>
            </article>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'></small>
            </div>
            </article>
          <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>Data Structures and Algorithms</h4>
            <small className='text-light'></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>Azure</h4>
            <small className='text-light'></small>
            </div>
            </article> 
         <article className='experience__details'>
            < BsFillPatchCheckFill className="experience__details__icons"/>
            <div>
            <h4>CN OOPS DBMS OS</h4>
            <small className='text-light'></small>
            </div>
            </article> 
        </div> 
      </div>

    </section>
  )
}

export default experience