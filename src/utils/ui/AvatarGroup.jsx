import { Avatar, Row, Tooltip } from 'antd'
import React from 'react'
import style from '../../styles/avatargroup.module.scss'
const Avatars = ({students}) => {
  return (
    <Row className={style.avatargrouprow}>
    <Avatar.Group>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <a href="https://ant.design">
        <Avatar
          style={{
            backgroundColor: '#f56a00',
          }}
        >
          KG
        </Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
        >
            MA
        </Avatar>
      </Tooltip>
    </Avatar.Group>
    <Row>+{students}</Row>
    </Row>
  )
}

export default Avatars