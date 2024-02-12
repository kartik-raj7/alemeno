import React from 'react'
import style from '../../styles/coursedetailpage.module.scss'
import { Avatar, Col, Divider, Image, Rate, Row } from 'antd'
import { generateRandom } from '../../utils/utils'
import CoursePrerequisites from './Courseprerequisites';
import CourseTag from '../../utils/ui/CourseTag'
import { FaLocationDot } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import CourseSyllabus from './CourseSyllabus';

const Coursedetail = ({courseDetails}) => {
  return (
    <div className={style.coursedetail}>
    <Row className={style.courseheadingdiv}>
        <Col className={style.coursedetailheading}>{courseDetails.name}
        </Col>
        <Col className={style.coursestatus}>
        <CourseTag status={courseDetails.enrollmentStatus}/>
        </Col>
    </Row>
    <Row className={style.courseratingdiv}> <Rate allowHalf defaultValue={courseDetails.rating} disabled={true}/><span className={style.coursedetailrating}>{courseDetails.rating}</span> <span className={style.coursedetailratingusers}>({generateRandom(1000,3000)} ratings)</span></Row>
    <Image src={courseDetails.thumbnail} preview={false}/>
    <Row className={style.coursedetailsdiv}>
        <Col span={8} className={style.coursedetails}>
        <FaLocationDot style={{paddingRight:'10px'}}/>{courseDetails.location}
        </Col>
        <Col span={8} className={style.coursedetails}>
        <TbUsersGroup style={{paddingRight:'10px'}}/>
         {generateRandom(0,200)} students enrolled
        </Col>
        <Col span={8} className={style.coursedetails}>
        <IoMdTime style={{paddingRight:'10px'}}/>
        {courseDetails.duration}
        </Col>        
    </Row>
    <Divider style={{width:'10px'}}/>
    <Row className={style.coursedescriptiondiv}>
        <Col xs={24} lg={19}>
        <Row className={style.coursedescriptionheading}>Description</Row>
        <Row className={style.prerequisites}><RiToolsFill/>Prerequisites:  
        <CoursePrerequisites prerequisites={courseDetails.prerequisites}/>
        </Row>
        <Row>{courseDetails.description}</Row>
        <Row className={style.courseoverviewheading}>Course Overview</Row>
    <Row className={style.courseoverviewdiv}>
        <CourseSyllabus syllabus={courseDetails.syllabus}/>
    </Row>
        </Col>
        <Col xs={6} lg={5} className={style.courseinstructordetail}>
         <Row>Instructor </Row>
         <Avatar
          src={`https://ui-avatars.com/api/?name=${courseDetails.instructor}`}
          alt="User Avatar"
          className={style.useravatar}
        />
        <Row>{courseDetails.instructor}</Row>
        </Col>
    </Row>
    </div>
  )
}

export default Coursedetail