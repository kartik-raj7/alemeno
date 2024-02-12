import { Col, Image, Row } from 'antd'
import React from 'react'
import style from '../../styles/homepage.module.scss'
import { GrAnnounce } from "react-icons/gr";
import { useSelector } from 'react-redux';
import UserProfileAvatar from '../../utils/ui/userProfileAvatar';
import { Link } from 'react-router-dom';
const Navbar = ({logOut}) => {
  const data = useSelector((state) => state.user);
  const {user} = data;
  return (
    <>
    <Row className={style.navbar}>
    <Link to={'/viewcourses'}><Col className={style.companylogo}><Image src='/alemeno.png' preview={false}/></Col></Link>
    <Col className={style.navbaravatar}>
    {user&&<>
     <UserProfileAvatar user={user} logOut={logOut}/>
    </>}
    </Col>
    </Row>
    </>
  )
}

export default Navbar