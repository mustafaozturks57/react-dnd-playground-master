import React from 'react';
import { useDrop } from 'react-dnd';
import styles from '../styles/Droppable.module.css';

function Droppable({ accept, handleDrop, text, children, state, big, style,className  }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) => handleDrop(item, monitor, state),
      collect: (monitor) => ({
        isOver: !!monitor.isOver({ shallow: true }),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [state] // Dependency
  );

  const isActive = isOver && canDrop;
 
  if(className=="droppable"){
    return (
  
      <div
       id='BsFormContainer'  className={`${styles.droppable} ${isActive && styles.over} ${
          !isActive && canDrop && styles.can
        } ${big && styles.big}`}
        style={style}
        ref={drop}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            <p>{text}</p>
             {children}
            </div>
          </div>
        </div>
       
      </div>
   
    );
  }
  else if (className=="droppablenav"){
    return (
  
      <div
       id='BsFormContainer'  className={`${styles.droppablenav} ${isActive && styles.over} ${
          !isActive && canDrop && styles.can
        } ${big && styles.big}`}
        style={style}
        ref={drop}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            {children}
             
           
              
            </div>
          </div>
        </div>
       
      </div>
   
    );
  }
  else{
    return (
  
      <div
       id='BsFormContainer'  className={`${styles.droppablenav} ${isActive && styles.over} ${
          !isActive && canDrop && styles.can
        } ${big && styles.big}`}
        style={style}
        ref={drop}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
            {children}
             
           
              
            </div>
          </div>
        </div>
       
      </div>
   
    );
  }
}

export default Droppable;
