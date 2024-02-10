import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({data}) => {
  const navigate = useNavigate();
  function redirectToCourseDetailPage(){
    navigate(`/viewcourseindetail/:${data.id}`,{state:data})
  }
  return (
    <Card onClick={redirectToCourseDetailPage}>
        {data.name}
    </Card>
  )
}

export default CourseCard