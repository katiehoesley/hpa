import React from 'react';

const Preferences = (props) => {
    return(
        <div className='preferences'>
            <label>
                <h3>You have {props.pageNum} pages to read.</h3> 
                <h3>How many pages do you want to read every night?</h3>
                <select onChange={props.handleSelect}>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option selected value="150">150</option>
                    <option value="200">200</option>
                </select>
                <h3>You can read {props.title} in {(props.pageNum)/(props.pagesPerNight)} days. Put it on the calendar!</h3>
                <h3>When do you want to start reading?</h3>
                <select onChange={props.handleSelectTwo}>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option selected value="next week">Next Week</option>
                </select>
                <h3>You're all set! You'll start reading {props.title} {props.startDate}. Enjoy!</h3>
            </label>
        </div>
    )
}

export default Preferences; 