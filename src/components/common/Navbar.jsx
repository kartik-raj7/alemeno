import { Col, Image, Row } from 'antd'
import React from 'react'
import style from '../../styles/homepage.module.scss'
import { GrAnnounce } from "react-icons/gr";
import { useSelector } from 'react-redux';
import UserProfileAvatar from '../../utils/ui/userProfileAvatar';
const Navbar = () => {
  const data = useSelector((state) => state.user);
  const {user} = data;
  return (
    <>
    <Row className={style.navbar}>
    <Col className={style.companylogo}><Image src='/alemeno.png'/></Col>
    <Col className={style.navbaravatar}>
    {user&&<>
     <UserProfileAvatar user={user}/>
    </>}
    </Col>
    </Row>
    </>
  )
}

export default Navbar