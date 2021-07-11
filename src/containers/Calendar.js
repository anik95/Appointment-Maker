import React, { useState } from 'react'
import moment from 'moment'

import Modal from '../components/Modal'
import ApppointmentDetails from '../components/ApppointmentDetails'
import CalendarHeadings from '../components/Calendar/CalendarHeadings'
import RenderDays from '../components/Calendar/RenderDays'

const Calendar = ({ appointments, currentMonth }) => {
  const [ today ] = useState(moment())
  const [showAppointment, setShowAppointment] = useState(null)
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  
  const handleShowSelectedAppointment = (id) => {
    console.log('id: ', id, appointments.find(app => app.id === id))
    setSelectedAppointment(appointments.find(app => app.id === id))
    setShowAppointment(true)
  }
  
  const handleCloseModal = () => {
    setShowAppointment(false)
    setSelectedAppointment(null)
  }
  
  return (
    <div>
      <Modal show={showAppointment} modalClosed={handleCloseModal}>
        {
          <ApppointmentDetails selected={selectedAppointment} />
        }
      </Modal>
      <CalendarHeadings />
      <RenderDays currentMonth={currentMonth} appointments={appointments} today={today} showAppointment={handleShowSelectedAppointment}/>
    </div>
  )
}

export default Calendar