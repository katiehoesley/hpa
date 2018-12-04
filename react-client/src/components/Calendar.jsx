import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = (props) => {
    return (
        <div className='calendar'>
            <div style={{ height: 700 }}>
                <BigCalendar 
                    localizer={localizer}
                    events={[]}
                    startAccessor="start"
                    endAccessor="end" 
                />
            </div>
        </div>
    )
}
  
export default Calendar;
