import { Tag } from 'antd'
import React from 'react'
import { courseStatusColor } from '../utils'

const CourseTag = ({status}) => {
  const {color,background} = courseStatusColor(status);
  return (
    <Tag style={{color:color,backgroundColor:background,border:`1px solid ${color}`,borderRadius:'15px'}}>{status}</Tag>
  )
}

export default CourseTag