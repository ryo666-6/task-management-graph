import React, { useState, useRef, useEffect } from 'react';
import classes from '../style/LineChart.module.css'
import { Button, Input, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const [date, SetDate] = useState(['']);
    const [numData, setNumData] = useState([0]);

    const calVal = useRef(['']);
    const chooseDate = useRef([0]);

    const onClick = () => {
        SetDate(chooseDate.current.value);
        console.log(date, chooseDate.current.value)
        chooseDate.current.value = '';

        setNumData(calVal.current.value);
        console.log(numData, calVal.current.value)
        calVal.current.value = '';
    }

    useEffect(() => {
        const newPushValue = () => {
            date.push(...date, chooseDate.current.value)
            numData.push(...numData, calVal.current.value)
        }
    },[date][numData]);

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', date],
        datasets: [
            {
                label: 'How many todos can you achieve？',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'square',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#eee',
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [2,4,3,5,6,5,numData]
            }
        ]
    };

    const checkOfDelete = () => {
        let result = window.confirm('Reset. ok?')
        
        if(result) {
            console.log('Delete.');
        } else {
            alert('fail.')
        }
    };
    
    return (
        <div mt='2'>
            <Line data={data}/>
            <p className={classes.p}>You did {numData ? numData : ''} tasks today!!</p>
            <Input className={classes.input} ref={chooseDate} variant='outline' w='40%' ml='30%' mb='2' mt='3' borderRadius='15px' type='text' label='date' placeholder='Date'/>
            <Input className={classes.input} ref={calVal} variant='outline'  w='54%' ml='23%' borderRadius='15px' type='number' label='number' placeholder='How many？'/>
            <br/>
            {data.labels.length < 8 ? <Button colorScheme='teal' ml='21%' mr='2' onClick={onClick}>Send</Button> : <p>date is full.</p>}
            <Button colorScheme='teal' onClick={checkOfDelete} >Reset</Button>
        </div>
    )
};

export default LineChart
