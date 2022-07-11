import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareAdd} from 'react-icons/bi'

const nav = () => {
  return (
    <nav>
      <a href="#"><FiHome/></a>
      <a href="#about"><FaUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#contact"><BiMessageSquareAdd/></a>
    </nav>
  )
}

export default nav