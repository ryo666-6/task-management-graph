import React, {useRef} from 'react'
import classes from '../style/Time.module.css'


const Time = () => {
    const resultTime = useRef(null)
    const time = new Date();
    const nowYear = time.getFullYear();
    const nowMonth = time.getMonth() + 1;
    const nowDate = time.getDate();
    const nowDay = time.getDay();
    const nowHour = time.getHours();
    const nowMinutes = time.getMinutes();
    const nowSeconds = time.getSeconds();

    const amPm = nowHour >= 12 ? 'PM' : 'AM'
   

    const addZero = (n) => {
        return (parseInt(n,10) < 10 ? '0' : '') + n
    }

    const setAmPm = true;

    // resultTime.innerHTML = `${nowYear}/${nowMonth}/${nowDate}/${nowDate}/${week[nowDay]}曜日 - ${nowHour}<span>:</span>${addZero(nowMinutes)}<span>:</span>${addZero(nowSeconds)}${setAmPm ? amPm : ''}`

    // if(nowMonth < 10) {
    //     nowMonth = '0' + nowMonth;
    // }
    // if(nowDate < 10) {
    //     nowDate = '0' + nowDate
    // }

    const week = ['日', '月','火', '水', '木','金','土'];

    const showTime = `${nowYear}/${nowMonth}/${nowDate}/${week[nowDay]}曜日 - ${nowHour}:${addZero(nowMinutes)}:${addZero(nowSeconds)}${setAmPm ? amPm : ''}`
    
    return (
        <div>
           <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet"></link>
            <time ref={resultTime} className={classes.time}>{showTime}</time>
        </div>
    )
}

export default Time
