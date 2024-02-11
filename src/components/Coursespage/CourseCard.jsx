import { Card, Col, Image, Rate, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../styles/coursecard.module.scss'
import CourseTag from '../../utils/ui/CourseTag'
import Avatars from '../../utils/ui/AvatarGroup'
import { generateRandom } from '../../utils/utils'
const CourseCard = ({data}) => {
  const navigate = useNavigate();
  function redirectToCourseDetailPage(){
    navigate(`/viewcourseindetail/:${data.id}`,{state:data})
  }
  return (
    <Card onClick={redirectToCourseDetailPage} className={style.courselistcard}>
      <Row className={style.coursecardrow}>
        <Col span={6}><Image src={data.thumbnail} preview={false}/></Col>
        <Col span={15} className={style.coursedetails}>
          <Row className={style.courseheading}>
          <div className={style.coursename}>{data.name}</div>
          <div><CourseTag status={data.enrollmentStatus}/></div>
          </Row>
          <Row className={style.courseinstructor}>Course Instructor - {data.instructor}</Row>
          <Row className={style.courserating}><Rate allowHalf defaultValue={data.rating} disabled={true}/></Row>
          <Row className={style.courseattendants}><Avatars students={generateRandom(10,400)}/></Row>
        </Col>
      </Row>
    </Card>
  )
}

export default CourseCard