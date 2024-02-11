import React from 'react';
import { Col, Collapse, Row } from 'antd';
import style from '../../styles/coursedetailpage.module.scss'
const { Panel } = Collapse;
import { CiCalendarDate } from "react-icons/ci";
const CourseSyllabus = ({ syllabus }) => {
  return (
    <Collapse accordion className={style.courseoverviewdiv}>
      {syllabus.map((item, index) => (
        <Panel header={
            <Row>
            <Col span={20}>
            {item.topic}
            </Col>
            <Col span={4} className={style.weekdescriptiondiv}>
              <CiCalendarDate style={{paddingRight:'5px'}}/>Week {item.week}
            </Col>
            </Row>} key={index}>
          <p>{item.content}</p>
        </Panel>
      ))}
    </Collapse>
  );
};

export default CourseSyllabus;
