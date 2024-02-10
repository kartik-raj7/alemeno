import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import courses from '../data/courses'
import Search from 'antd/es/input/Search';
import style from '../styles/dashboard.module.scss'
import { List, Row, Space } from 'antd';
import useCourseSearch from '../hooks/useSearchHook';
import {motion} from 'framer-motion'
const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.course);
  const {course} = data;
  const [allcourses,setAllCourses] = useState([]);
  const [filteredCourses, searchCourses ] = useCourseSearch();
  function ApiCall(){
    if(!course){
     dispatch({ type: 'SET_COURSES', payload:courses  });
     console.log('action',course);
     setAllCourses(course);
    }
  }
  function SearchCourse(searchTerm){
     searchCourses(searchTerm,course);
     setAllCourses(filteredCourses);
  }
  useEffect(()=>{
      ApiCall();
      if(course&&course.length>0){
        setAllCourses(course)
      }
  },[course])
  return (
    <div className={style.dashboard}>
      <Space>
      <Row>
     <Search onChange={(e)=>SearchCourse(e.target.value)} placeholder='Search Courses Here'/>
     </Row>
     <Space>
    
     </Space>
     </Space>
    </div>
  )
}

export default Dashboard