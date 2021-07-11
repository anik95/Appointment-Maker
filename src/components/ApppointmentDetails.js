import React from 'react'
import moment from 'moment'
import { FormRow, Label, Input, AppointmentDetailsHeading } from '../StyledComponents'

const ApppointmentDetails = ({ selected }) => {
  return (
    <div>
      <AppointmentDetailsHeading>Appointment Details</AppointmentDetailsHeading>
      <FormRow>
        <Label>Name: </Label>
        <Input name="name" value={selected.name} disabled readOnly/>
      </FormRow>
      <FormRow>
        <Label>Date: </Label>
        <Input name="date" value={moment(selected.date).format('MMMM dddd, yyyy h:mm a')} disabled readOnly />
      </FormRow>
      {
        selected.age && (
          <FormRow>
            <Label>Age: </Label>
            <Input value={selected.age} readOnly disabled/>
          </FormRow>
        )
      }
      {
        selected.gender && (
          <FormRow>
            <Label>Gender: </Label>
            <Input value={selected.gender} disabled readOnly />
          </FormRow>
        )
      }
    </div>
  )
}

export default ApppointmentDetails