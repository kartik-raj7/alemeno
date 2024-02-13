import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { LogoutOutlined } from '@ant-design/icons';
import style from '../../styles/homepage.module.scss';
import { Link, Navigate} from 'react-router-dom';

const UserProfileAvatar = ({ user,logOut }) => {
  const tooltipContent = (
    <div>
      <p>Email- {user.email}</p>
      <Link to='/mycourses'><p className={style.mycoursesoption}>My Courses</p></Link>
      <div className={style.logoutoption} onClick={logOut}>
        <LogoutOutlined style={{paddingRight:'5px'}}/>
        <span className={style.logout}>Logout</span>
      </div>
    </div>
  );

  return (
    <Tooltip title={tooltipContent} placement="bottomLeft">
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
