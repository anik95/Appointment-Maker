import React from 'react'
import { useForm } from "react-hook-form"
import moment from 'moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { Form, FormRow, Input, Select, Label, SubmitButton, ErrorMessage } from '../StyledComponents'

const AppointmentForm = ({ appointmentDate, changeDate, submit, dateError }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormRow>
        <Label htmlFor="name">Name: </Label>
        <Input type="text" placeholder="Enter your name" { ...register('name', { required: "Please insert your name" }) } id="name"/>
        { errors.name  && <ErrorMessage>{ errors.name.message }</ErrorMessage>}
      </FormRow>
  
      <FormRow>
        <Label>Date & Time:</Label>
        <DatePicker
          selected={appointmentDate}
          onChange={(date) => changeDate(date)}
          placeholderText="Please pick a date and time"
          closeOnScroll={true}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          maxDate={moment('Dec 31 2021').toDate()}
          minDate={moment('Jan 1 2019').toDate()}
        />
        { dateError  && <ErrorMessage>Please select a date</ErrorMessage>}
      </FormRow>
      
      <FormRow>
        <Label htmlFor="age">Age: </Label>
        <Input type="number" placeholder="Enter your age" {...register("age")} id="age"/>
      </FormRow>
      
      <FormRow>
        <Label htmlFor="gender">Gender:</Label>
        <Select {...register("gender")} id="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </FormRow>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  )
}

export default AppointmentForm