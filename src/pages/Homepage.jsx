import { Col, Image, Row } from 'antd'
import React from 'react'
import LoginComponent from '../components/Login/LoginComponent'
import Transition from '../utils/ui/Transition'

const Homepage = () => {
  return (
    <div>
         <Transition>
         <LoginComponent/>
         </Transition>
      
    </div>
  )
}

export default Homepage