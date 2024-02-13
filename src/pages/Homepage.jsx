import { Col, Image, Row } from 'antd'
import React from 'react'
import LoginComponent from '../components/Login/LoginComponent'
import Transition from '../utils/ui/Transition'

const Homepage = ({logIn}) => {
  return (
    <div>
          <Transition>
         <LoginComponent logIn={logIn}/>    
        </Transition> 
    </div>
  )
}

export default Homepage