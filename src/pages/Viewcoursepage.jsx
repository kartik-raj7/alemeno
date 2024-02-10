import React from 'react'
import { useLocation } from 'react-router-dom';

const Viewcourseindetail = () => {
  const location = useLocation();
  const courseData = location.state;
  return (
    <div>
      {courseData.name}
    </div>
  )
}

export default Viewcourseindetail