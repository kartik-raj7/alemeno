import { notification } from "antd";
import dayjs from 'dayjs';

export const capitalizeFirstLetter = string => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  };
  
  export const validateEmail = e => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (e.match(isValidEmail)) {
      return true;
    } else {
      return false;
    }
  };
  
  export const openNotificationWithIcon = (type, msg, des) => {
    notification[type]({
      message: msg,
      description: des,
    });
  };
  
  export const toInputUppercase = e => {
    e.target.value = ('' + e.target.value).toUpperCase();
  };

  export const courseStatusColor = (status)=>{
    if(status=="Open"){
      return {color:"green",background:'#D1FFBD'}
    }
    if(status=="Closed"){
      return {color:"red",background:'#FFA2AD'}
    }
    if(status=="InProgress"){
      return {color:"#F6BE00",background:'white'}
    }
  }
  export const generateRandom = (max,min)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
export function formatDate(dateString) {
    const dateObject = dayjs(dateString);
    return dateObject.format("dddd, MMMM DD, YYYY");
}
  