const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

export default function reducer(state, action) {
  const { appointments, interviewers, days , day } = action.value;
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day
       };
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days,
        appointments,
        interviewers
       };
    case SET_INTERVIEW:
      return {
        ...state,
        appointments,
        days
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}