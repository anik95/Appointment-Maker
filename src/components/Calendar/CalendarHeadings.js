import React from 'react'
import { CalendarHeader, CalendarHeaderDay } from '../../StyledComponents'

const CalendarHeadings = props => {
  return (
    <CalendarHeader>
      {
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
          <CalendarHeaderDay key={day}>{ day }</CalendarHeaderDay>
        ))
      }
    </CalendarHeader>
  )
}

export default CalendarHeadings