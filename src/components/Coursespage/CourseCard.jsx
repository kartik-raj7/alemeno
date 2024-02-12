import { Button, Card, Col, Image, Modal, Progress, Rate, Row } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../../styles/coursecard.module.scss'
import CourseTag from '../../utils/ui/CourseTag'
import Avatars from '../../utils/ui/AvatarGroup'
import { IoIosDoneAll } from "react-icons/io";
import { formatDate, generateRandom } from '../../utils/utils'

const CourseCard = ({data}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (e) => {
    e.stopPropagation()
    setIsModalOpen(false);
  };
  const handleCancel = (e) => {
    e.stopPropagation()
    setIsModalOpen(false);
  };
  const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
  function redirectToCourseDetailPage(){
    navigate(`/viewcourseindetail/:${data.id}`,{state:data})
  }
  function markAsCompleted(){
      showModal();
  }
  return (
    <Card onClick={redirectToCourseDetailPage} className={style.courselistcard}>
      <Row className={style.coursecardrow}>
        <Col span={6}><Image src={data.thumbnail} preview={false}/></Col>
        <Col span={15} className={style.coursedetails}>
          <Row className={style.courseheading}>
          <div className={style.coursename}>{data.name}</div>
          <div><CourseTag status={data.enrollmentStatus}/></div>
          {data.progress&&<div><Button onClick={(event) => { event.stopPropagation(); markAsCompleted(); }}><IoIosDoneAll style={{color:'green',fontSize:'30px'}}/></Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          Are you sure you want to mark this course as completed?
      </Modal>
          
          </div>}
          </Row>
          <Row className={style.courseinstructor}>Course Instructor - {data.instructor}</Row>
          <Row className={style.courserating}><Rate allowHalf defaultValue={data.rating} disabled={true}/></Row>
          {data.progress&&<Progress percent={data.progress} status="active" strokeColor={twoColors}/>}
          <Row className={style.courseattendants} style={{justifyContent:data.dueDate&&'space-between'}}>
            {data.progress&&<Col>Due date - {formatDate(data.dueDate)}</Col>}
            <Col span={5}><Avatars students={generateRandom(10,400)}/></Col>
            </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default CourseCard