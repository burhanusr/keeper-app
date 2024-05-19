import React from "react";
import "./createNote.css";

function index() {
  return (
    <div className="container">
      <div className="note-form">
        <input type="text" placeholder="title" />
        <input type="text" placeholder="take a note" />
      </div>
    </div>
  );
}

export default index;
