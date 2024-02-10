import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { LogoutOutlined } from '@ant-design/icons';
import style from '../../styles/homepage.module.scss';
import { Navigate} from 'react-router-dom';

const UserProfileAvatar = ({ user }) => {
  const tooltipContent = (
    <div>
      <p>Email- {user.email}</p>
      <p onClick={Navigate('/mycourses')}>My Courses</p>
      <div className={style.logoutoption}>
        <LogoutOutlined />
        <span className={style.logout}>Logout</span>
      </div>
    </div>
  );

  return (
    <Tooltip title={tooltipContent} placement="bottom">
      <motion.div whileTap={{ scale: 0.85 }}>
        <Avatar
          src={`https://ui-avatars.com/api/?name=${user.email}`}
          alt="User Avatar"
          className={style.useravatar}
        />
      </motion.div>
    </Tooltip>
  );
};

export default UserProfileAvatar;
