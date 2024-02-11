import React from 'react'
import { useLocation } from 'react-router-dom';
import Coursedetail from '../components/Coursedetail/Coursedetail';
import style from '../styles/coursedetailpage.module.scss'
const Viewcourseindetail = () => {
  const location = useLocation();
  return (
    <div className={style.coursedetailpage}>
      <Coursedetail courseDetails={location.state}/>
    </div>
  )
}

export default Viewcourseindetail