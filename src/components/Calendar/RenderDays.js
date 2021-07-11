import React from 'react'
import moment from 'moment'
import { Appointment, AppointmentInfo, Appointments, CalendarDay, CalendarRow, Day } from '../../StyledComponents'

const RenderDays = ({ currentMonth, appointments, today, showAppointment }) => {
  const monthStart = moment(currentMonth).startOf('month')
  const monthEnd = moment(currentMonth).endOf('month')
  const startDate = moment(monthStart).startOf('week')
  const endDate = moment(monthEnd).endOf('week')
  const rows = []
  let days = []
  let day = startDate
  let isDisabled
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      let appointmentsToday = appointments.filter(a => day.isSame(moment(a.date), 'day'))
      appointmentsToday.sort((a, b) => new Date(a.date) - new Date(b.date))
      isDisabled = !day.isSame(monthStart, 'month')
      days.push(
        <CalendarDay disabled={isDisabled} key={day}>
          <Day isToday={day.isSame(today, 'day')} >
            { moment(day).format('D') }
          </Day>
          {
            <Appointments>
              {
                (appointmentsToday.length) ? (
                  appointmentsToday.map(appointment => {
                    return (
                      <Appointment key={appointment.id} onClick={() => showAppointment(appointment.id)} disabled={isDisabled}>
                        <AppointmentInfo>{ appointment.name }</AppointmentInfo>
                        <AppointmentInfo><b>{ moment(appointment.date).format('hh:mm a') }</b></AppointmentInfo>
                      </Appointment>
                    )
                  })
                ) : null
              }
            </Appointments>
          }
        </CalendarDay>
      );
      day = moment(day).add(1, 'day');
    }
    rows.push(
      <CalendarRow key={day}>
        {days}
      </CalendarRow>
    );
    days = [];
  }
  return <div>{ rows }</div>
}

export default RenderDays