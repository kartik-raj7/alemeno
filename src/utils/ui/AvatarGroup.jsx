import { Avatar, Row, Tooltip } from 'antd'
import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
const Avatars = ({students}) => {
  return (
    <>
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
    </>
  )
}

export default Avatars