import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { axiosGet } from '../services/api/axios';
import { useDispatch } from 'react-redux';
import CourseList from '../components/Coursespage/CourseList';
import style from '../styles/dashboard.module.scss'
const Dashboard = () => {
   const [mycourses,setMyCourses] = useState([]);
    const dispatch = useDispatch();
    async function ApiCall(){
        // if(!course){
        console.log('here')
         const coursedata =  await axiosGet('https://mocki.io/v1/04ad809b-248c-4d63-8d4c-6c384188d941');
         dispatch({ type: 'SET_MY_COURSES', payload:coursedata  });
         console.log('action',coursedata);
         setMyCourses(coursedata);
        // }
      }
    useEffect(()=>{
     ApiCall();
    },[])
  return (
    <div className={style.mycoursescontainer}>
    <Row style={{width:'80%'}}>
    <Row className={style.mycoursesheading}>My Courses</Row>
    <div >
    <CourseList allcourses={mycourses}/>
    </div>
    </Row>
    </div>
  )
}

export default Dashboard