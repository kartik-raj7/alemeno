import React from 'react';
import { Row, Tag, Tooltip } from 'antd';
import style from '../../styles/coursedetailpage.module.scss'
const CoursePrerequisites = ({ prerequisites }) => {
  const renderPrerequisites = () => {
    if (prerequisites.length === 0) {
      return 'None';
    } else if (prerequisites.length === 1) {
      return prerequisites[0];
    } else {
      return <><Tag style={{ color: getRandomColor(),border:`1px solid ${getRandomColor()}`}}>{prerequisites[0]}</Tag>
       <Tooltip title={renderTooltipContent()} placement="top">
        <span style={{ cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px' }}>
      +{prerequisites.length - 1}</span>
      </Tooltip>
      </>;
    }
  };

  const renderTooltipContent = () => (
    <ul style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
      {prerequisites.map((prerequisite, index) => (
        <li key={index} >
          {prerequisite}
        </li>
      ))}
    </ul>
  );

  const getRandomColor = () => {
    const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#ff7f50']; // Define your colors
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Row className={style.courseprerequisites}>
          {renderPrerequisites()}   
    </Row>
  );
};

export default CoursePrerequisites;
