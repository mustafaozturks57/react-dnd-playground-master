// Textbox.jsx
import React from 'react';
import styles from '../../styles/Draggable.module.css';

const Textbox = ({ id, style, placeholder, PropChange }) => {
  return (
    <div className={styles.draggable}>
      <div style={{ float: 'right' }} className={styles.draggable_text}>
        <i>
          <i className="bi bi-braces mr-1"></i>
        </i>
        <i onClick={PropChange} id={"edit" + id.substring(0, 3)}>
          <i id={"edit" + id.substring(0, 3)} className="bi bi-gear  mr-1"></i>
        </i>
        <i>
          <i style={{ color: "red" }} className="bi bi-trash"></i>
        </i>
      </div>
      <input
        className="form form-control mt-2"
        id={id}
        style={style}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textbox;
