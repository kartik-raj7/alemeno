import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Coursedetail from '../components/Coursedetail/Coursedetail';
import style from '../styles/coursedetailpage.module.scss'
import Transition from '../utils/ui/Transition';
const Viewcourseindetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!location.state){
       navigate('/viewcourses');
    }
  },[])
  return (
    <Transition>
    <div className={style.coursedetailpage}>
      {location.state&&<Coursedetail courseDetails={location?.state}/>}
    </div>
    </Transition>
  )
}

export default Viewcourseindetail