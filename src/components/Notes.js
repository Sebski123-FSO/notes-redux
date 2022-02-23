import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? "important" : ""}</strong>
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  );
};

export default Notes;
