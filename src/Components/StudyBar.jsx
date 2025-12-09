import React from "react";
import { ProgressBar } from "react-bootstrap";

import useStorage from "../useStorage.jsx"

export default function StudyProgress(props) {
  const percent = props.total > 0 ? Math.round((props.current / props.total) * 100) : 0;

  return (
    <div className="card shadow-sm p-3 mt-3">
      <h5 className="mb-3">Study Progress</h5>

      <ProgressBar now={percent} label={`${percent}%`} animated className="mb-3" />
    
    </div>
  );
}
