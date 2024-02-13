import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Search from 'antd/es/input/Search';
import style from '../styles/coursespage.module.scss'
import { List, Row, Space } from 'antd';
import useCourseSearch from '../hooks/useSearchHook';
import CourseList from '../components/Coursespage/CourseList';
import { axiosGet } from '../services/api/axios';
import { openNotificationWithIcon } from '../utils/utils';
import Transition from '../utils/ui/Transition';
const CoursesPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.course);
  const {course} = data;
  const [allcourses,setAllCourses] = useState([]);
  const [filteredCourses, searchCourses ] = useCourseSearch();
  async function ApiCall(){
    try{
    if(!course){
     const coursedata =  await axiosGet('https://mocki.io/v1/2cfcb266-1ede-4840-aba7-0e369de2125a');
     if(coursedata.length>0){
     dispatch({ type: 'SET_COURSES', payload:coursedata  });
     setAllCourses(coursedata);
     }
    }
    else if(course&&course.length>0){
      setAllCourses(course)
    }} catch (error){
       openNotificationWithIcon('error','Something went wrong');
       setAllCourses([])
    }
  }
  function SearchCourse(searchTerm){
     searchCourses(searchTerm,course);
     setAllCourses(filteredCourses);
  }
  useEffect(()=>{
      ApiCall();
  },[])
  return (
    <Transition>
    <div className={style.coursespage}>
      <div className={style.coursesdiv}>
      <Row className={style.searchcourseinputdiv}>
     <Search onChange={(e)=>SearchCourse(e.target.value)} placeholder='Search Courses Here' className={style.searchcourseinput}/>
     </Row>
     <div className={style.courseslist}>
     <CourseList allcourses={allcourses}/>
     </div>
     </div>
    </div>
    </Transition>
  )
}

export default CoursesPage