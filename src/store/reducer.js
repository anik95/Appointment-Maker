import * as actionTypes from './actions'
import moment from 'moment'

const initialState = {
  appointments: [
    {
      id: 1,
      name: 'Tom',
      age: '27',
      gender: 'male',
      date: moment().add('5', 'days')
    },
    {
      id: 2,
      name: 'Felix',
      age: '32',
      gender: 'male',
      date: moment().add('5', 'days').add('1', 'hours')
    },
    {
      id: 3,
      name: 'Steve',
      age: '20',
      gender: 'male',
      date: moment().add('5', 'days').subtract('4', 'hours')
    },
    {
      id: 4,
      name: 'Jenny',
      age: '29',
      gender: 'female',
      date: moment().add('3', 'days')
    },
    {
      id: 5,
      name: 'Tom',
      age: '21',
      gender: 'male',
      date: moment().add('5', 'days').add('30', 'minutes')
    },
    {
      id: 6,
      name: 'Tom',
      age: '21',
      gender: 'male',
      date: moment().add('5', 'days').add('45', 'minutes')
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [
          ...state.appointments,
          {...action.data}
        ]
      }
    default:
      return state
  }
}

export default reducer