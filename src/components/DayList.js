import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayList = props.days.map(day => {
    return (
      <DayListItem
        {...day}
        key={day.id}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
}