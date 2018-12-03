import React from 'react';

const Preferences = (props) => {
    return(
        <div className='preferences'>
            <label>
                How Many Pages Will You Read Each Night?
                <select>
                    <option value="1">50</option>
                    <option value="2">100</option>
                    <option selected value="3">150</option>
                    <option value="4">200</option>
                </select>
            </label>
            <p>At that rate, it will take you X NUMBER days to finish SELECTED BOOK TITLE.</p>
        </div>
    )
}

export default Preferences; 