import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Coursedetail from '../components/Coursedetail/Coursedetail';
import style from '../styles/coursedetailpage.module.scss'
const Viewcourseindetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!location.state){
       navigate('/viewcourses');
    }
  },[])
  return (
    <div className={style.coursedetailpage}>
      {location.state&&<Coursedetail courseDetails={location?.state}/>}
    </div>
  )
}

export default Viewcourseindetail