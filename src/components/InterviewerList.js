import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        name={interviewer.name}
        avatar={interviewer.avatar}
        key={interviewer.id}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
        selected={props.interviewer === interviewer.id}
      />
    );
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  );
}