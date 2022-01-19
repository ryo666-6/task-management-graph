import React,{ useRef } from 'react'
import { Button } from '@chakra-ui/react'

const Rate = () => {
    // const [result, setResult] = useState('')
    // const value = setResult()

    const calVal = useRef(null)
    const onClick = () => {
        return calVal.current.value;
    }
    
    return (
        <div>
            <input ref={calVal} type='number' label='number' placeholder='全体'/>中、<input type='number' label='number' placeholder='やった数'/>やったよ!
            <Button onClick={onClick}>達成率は？</Button>
            <p></p>
        </div>
    )
}

export default Rate
