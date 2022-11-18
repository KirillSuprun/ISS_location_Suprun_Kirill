import React, {useState} from 'react'

export default function DataTime() {
  
    let [dateData] = useState({
        dateNow: '',
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
  
    dateData.dateNow = new Date().toDateString();
        console.log(`dateNow`, dateData.dateNow);
    
    function setTime(){
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
        minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
        seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
        dateData.hours = hours;
        dateData.minutes = minutes;
        dateData.seconds = seconds;
        
        }
  
        setInterval(() => setTime(), 5000);
        setInterval(() => console.log(`dateData`, dateData), 5000)
        
        console.log(`dateData`, dateData)

        


    return (
    <div> 
    <h5> Here Data {dateData.dateNow} </h5> 
    
    <h5> Here Time {dateData.hours}:{dateData.minutes}:{dateData.seconds} </h5>
    
    </div>
  )
};

