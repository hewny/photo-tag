import { useEffect, useState } from 'react'
import FormatTime from './FormatTime';

const SubmitWindow = (props) => {
    const { isActive, seconds, name, setName} = props
    const [styleDisplay, setStyleDisplay] = useState("none");

    const submitStyle = {
      display: styleDisplay,
    };

    useEffect(() => {
        if (!isActive) {
            setStyleDisplay("flex")
        }
    },[isActive])

    const handleClick = () => {
        setStyleDisplay("none")
    }

    return (
        <div className='submit-container' style={submitStyle}>
            <span>You have found all characters in <FormatTime seconds={seconds}/>.</span>
            <span>Enter your name below to add it to the Leaderboard</span>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    )

}

export default SubmitWindow