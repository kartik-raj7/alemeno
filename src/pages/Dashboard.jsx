import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { axiosGet } from '../services/api/axios';
import { useDispatch, useSelector } from 'react-redux';
import CourseList from '../components/Coursespage/CourseList';
import style from '../styles/dashboard.module.scss'
import { openNotificationWithIcon } from '../utils/utils';
const Dashboard = () => {
   const [mycourses,setMyCourses] = useState([]);
   const {mycourse} = useSelector(state=>state.mycourse);
    const dispatch = useDispatch();
    async function ApiCall(){
        try{
        if(!mycourse){
         const coursedata =  await axiosGet('https://mocki.io/v1/9d22f647-f778-4d9e-91ae-ef3c02e5bfbd');
         if(coursedata.length>0){
         dispatch({ type: 'SET_MY_COURSES', payload:coursedata  });
         setMyCourses(coursedata);
         }
        }
        else if(mycourse&&mycourse.length>0){
          setMyCourses(mycourse);
        }} catch(error){
           openNotificationWithIcon('error','Something went wrong');
           setMyCourses([]);
        }
      }
    useEffect(()=>{
     ApiCall();
    },[])
  return (
    <div className={style.mycoursescontainer}>
    <Row style={{width:'80%'}}>
    <Row className={style.mycoursesheading}>My Courses</Row>
    <div className={style.mycourseslistdiv}>
    <CourseList allcourses={mycourses}/>
    </div>
    </Row>
    </div>
  )
}

export default Dashboard