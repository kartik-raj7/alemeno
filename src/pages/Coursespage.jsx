import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Search from 'antd/es/input/Search';
import style from '../styles/coursespage.module.scss'
import { List, Row, Space } from 'antd';
import useCourseSearch from '../hooks/useSearchHook';
import CourseList from '../components/Coursespage/CourseList';
import { axiosGet } from '../services/api/axios';
const CoursesPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.course);
  const {course} = data;
  const [allcourses,setAllCourses] = useState([]);
  const [filteredCourses, searchCourses ] = useCourseSearch();
  async function ApiCall(){
    if(!course){
    console.log('here')
     const coursedata =  await axiosGet('https://mocki.io/v1/2cfcb266-1ede-4840-aba7-0e369de2125a');
     dispatch({ type: 'SET_COURSES', payload:coursedata  });
     console.log('action',course);
     setAllCourses(coursedata);
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
  )
}

export default CoursesPage