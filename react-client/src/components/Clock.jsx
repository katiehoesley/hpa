import React from 'react'; 

const Clock = (props) => {
    return(
        <div>
            <h1>Countdown to the 2020 Presidential Election!</h1>
            <div className = 'countdown-clock'> 
                <div className='timer'>
                    Days: {props.days} | 
                    Hours: {props.hours} |
                    Minutes: {props.minutes} |
                    Seconds: {props.seconds}              
                </div>
            </div>
        </div>
    )
}

export default Clock;