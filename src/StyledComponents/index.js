import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledApp = styled.div`
  text-align: center;
  min-height: 100vh;
`

export const MainLayout = styled.div`
  padding: 24px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`

export const HeaderDropdown = styled.div`
  min-width: 130px;
  position: relative;
  margin-right: 32px;
  &:last-of-type {
    margin-right: 0;
  }
`

export const Dropdown = styled.button`
  width: 100%;
  height: 50px;
  outline: 0;
  text-align: center;
  color: #131313;
  background: ${props => props.showing ? '#e8eaed' : 'transparent'};
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`

export const DropdownList = styled.ul`
  display: ${props => props.showing ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  left: 0;
  background: #fff;
  width: 160px;
  list-style: none;
  margin: 0;
  border-radius: 2px;
  border: 0;
  box-shadow: 3px 3px 5px #bcbcbc;
  padding: 0;
`

export const DropdownListItem = styled(Link)`
  width: 100%;
  background: #fff;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #131313;
  cursor: pointer;
  font-size: 14px;
  padding: 16px 12px;
  text-decoration: none;
  &:hover {
    background: #f1f3f4;  
  }
`

export const CreateAppointment = styled.button`
  padding: 16px;
  height: 50px;
  background: #1a73e8;
  color: #fff;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  border: 0;
`

export const CalendarHeader = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #131313;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 12px 0;
  width: 100%;
  margin: 0;
  list-style: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const CalendarHeaderDay = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: calc(100% / 7);
  color: #70757a;
`

// export const CalendarBody = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   color: #131313;
//   border-bottom: 1px solid #eeeeee;
//   padding: 12px 0;
//   flex-wrap: wrap;
// `

export const CalendarRow = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #131313;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
`

export const CalendarDay = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: calc(100% / 7);
  height: 120px;
  padding: 5px;
  background: ${props => props.disabled ? '#f9f9f9' : '#fff'};
  color: ${props => props.disabled ? '#bcbcbc' : '#131313'};
  flex-direction: column;
  border-right: 1px solid #eeeeee;
  &:last-of-type {
    border: 0;
  }
  @media screen and (max-width: 767px) {
    min-width: calc(100% / 7);
  }
`

export const Day = styled.span`
  margin: 0;
  display: inline-block;
  font-size: 12px;
  padding: 4px;
  color: ${props => props.isToday && '#fff'};
  border-radius: ${props => props.isToday && '50%'};
  background: ${props => props.isToday && '#1a73e8'};
`

export const BackdropElement = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(0, 0 , 0, 0.5);
`

export const ModalElement = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 50%;
  max-width: 500px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    width: 90%;
    max-width: 90%;
  }
`

export const Form = styled.form`
  text-align: center;
  padding: 24px;
`

export const FormRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto 16px auto;
`

export const Label = styled.label`
  display: inline-block;
  padding: 8px 0;
  color: #5e5353;
  text-align: left;
  font-size: 14px;
`

export const Input = styled.input`
  font-size: 14px;
  display: inline-block;
  width: 100%;
  height: 32px;
  border-radius: 4px;
  color: #131313;
  outline: 0;
  border: 1px solid #5e5353;
  padding-left: 8px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const Select = styled.select`
  padding: 5px;
  font-size: 14px;
  outline: 0;
`

export const SubmitButton = styled.button`
  padding: 16px;
  height: 50px;
  background: #1a73e8;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  border: 0;
  width: 80%;
`

export const ErrorMessage = styled.span`
  color: salmon;
  font-size: 12px;
  display: inline-block;
  padding: 5px 0;
  margin-bottom: 5px;
`

export const Appointments = styled.div`
  display: block;
  padding: 4px 0;
  height: calc(120px - 30px);
  overflow-y: auto;
  width: 100%;
`

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  ${props => props.disabled ? '#bcbcbc' : '#00bfff'};
  color: #fff;
  margin-bottom: 5px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  pointer-events: ${props => props.disabled && 'none'};
  @media screen and (max-width: 767px) {
    max-width: 40px;
  }
`

export const AppointmentInfo = styled.span`
  max-width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:last-of-type {
    max-width: 60px;
    @media screen and (max-width: 767px) {
      max-width: 100%;
    }
  }
  &:first-of-type {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`

export const AppointmentDetailsHeading = styled.h3`
  margin: 20px 0 20px 0;
  font-size: 20px;
  font-weight: bold;
  padding: 0;
`

