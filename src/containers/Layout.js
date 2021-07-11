import { useState, useEffect, Fragment } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import Calendar from './Calendar'
import Header from '../components/Header'
import Modal from '../components/Modal'
import AppointmentForm from './AppointmentForm'

import { MainLayout } from '../StyledComponents'

import * as actionTypes from '../store/actions'

const Layout = (props) => {
  const history = useHistory()
  const url = window.location.pathname.split('/')
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const [showYear, setShowYear] = useState(false)
  const [showMonth, setShowMonth] = useState(false)
  const [year, setYear] = useState(
    (url[2] && +url[2] >= 2019 && +url[2] <= 2021) ?
      url[2] : moment().year()
  )
  const [month, setMonth] = useState(
    (url[4] && !!monthNames[+url[4] - 1]) ?
      monthNames[+url[4] - 1] : moment().format('MMMM')
  )
  
  const [showModal, setShowModal] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState(moment().toDate())
  const [appointmentDateError, setAppointmentDateError] = useState(false)
  
  useEffect(() => {
    if (!((url[2] && +url[2] >= 2019 && +url[2] <= 2021) && (url[4] && !!monthNames[+url[4] - 1]))) {
      history.push(`/year/${moment().year()}/month/${moment().month() + 1}`)
    }
  }, [])
  
  const handleYearChange = year => {
    setYear(year)
    setShowYear(false)
  }
  
  const handleMonthChange = month => {
    setMonth(month)
    setShowMonth(false)
  }
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  })
  
  const handleClickOutside = (event) => {
    if (!event.target.closest('.year') && showYear) {
      setShowYear(false)
    }
    if (!event.target.closest('.month') && showMonth) {
      setShowMonth(false)
    }
  }
  
  const handleAppointmentDateChange = (date) => {
    setAppointmentDate(date)
  }
  
  const handleSubmit = (data, e) => {
    const updatedAppointments = [...props.appointments]
    if (!appointmentDate) {
      setAppointmentDateError(true)
      return
    }
    data.date = moment(appointmentDate)
    props.onAppointmentAdd({ ...data, id: ++updatedAppointments.length })
    setShowModal(false)
    setAppointmentDateError(false)
    e.target.reset()
  }
  
  useEffect(() => {
    showModal && setAppointmentDate(moment().toDate())
  }, [showModal])
  
  return (
    <Fragment>
      <Modal show={showModal} modalClosed={() => setShowModal(false)}>
        <AppointmentForm
          appointmentDate={appointmentDate}
          changeDate={handleAppointmentDateChange}
          submit={handleSubmit}
          dateError={appointmentDateError}
        />
      </Modal>
      <MainLayout>
        <Header
          showYear={showYear}
          showMonth={showMonth}
          showYearDropdown={() => setShowYear(prev => !prev)}
          showMonthDropdown={() => setShowMonth(prev => !prev)}
          year={year}
          month={month}
          monthNames={monthNames}
          changeYear={handleYearChange}
          changeMonth={handleMonthChange}
          showModal={showModal}
          openModal={() => setShowModal(true)}
        />
        <Route
          path={`/year/:year/month/:month`}
          component={() => <Calendar appointments={[...props.appointments]} currentMonth={moment(new Date(`${month} ${year}`))}/>}
        />
      </MainLayout>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppointmentAdd: (data) => dispatch({ type: actionTypes.ADD_APPOINTMENT, data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
