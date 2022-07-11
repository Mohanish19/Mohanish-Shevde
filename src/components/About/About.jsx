import React from 'react'
import './about.css'
import ME from '../../assets/m1.png'
// import {FiAward} from 'react-icons/fi'
// import {FiUsers} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className=" container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt=" "/>
      </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
           <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6+ Months</small>
          </article> 

          {/* <article className='about__card'>
            <FiAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6+ Months</small>
          </article> */}

           {/* <article className='about__card'>
            <FiAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6+ Months</small>
          </article>  */}
        </div>
        <p>
        I am pre-final year student at Government College of Engineering, Nagpur. My major is Electronics and Telecommunication and I do Problem Solving(Data Structures and Algorithms) for fun. I currently practice at Leetcode and InterviewBit and participate in Leetcode contests using Java and JavaScript. I have solved over 200 problems on various online judges. I am well versed with Computer Science fundamentals like OOPS , Operating Systems, Database Management Systems, Computer Networks and also has keen interest in Database Design. I have built projects on Java  and Web Development using HTML, CSS, JavaScript, ReactJS and I am currently exploring full stack development and technologies like GraphQL and PostgreSQL. I am interested and open to Interview as an intern in Software Engineering domain.
        </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
    </section>

  )
}

export default About