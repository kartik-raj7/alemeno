import { List } from 'antd'
import React from 'react'
import {motion} from 'framer-motion'
import style from '../../styles/coursespage.module.scss'
import CourseCard from './CourseCard'
const CourseList = ({allcourses}) => {
  return (
    <div className={style.courseslist}>
         <List
        dataSource={allcourses}
        renderItem={(course, index) => (
          <motion.div
          className="card"
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              duration: 1 
            }
          }}
          viewport={{ once: true }}
        >
          <List.Item className={style.course}>
           <CourseCard data={course}/>
          </List.Item>
          </motion.div>
        )}
          />
    </div>
  )
}

export default CourseList