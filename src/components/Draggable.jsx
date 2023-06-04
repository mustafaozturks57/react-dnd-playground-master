import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import styles from '../styles/Draggable.module.css';
import  Textbox  from './Components/textbox.jsx';
import  Navbar  from './Components/navbar.jsx';
import  Carousel  from './Components/corousel.jsx';


function Draggable({ children, Classor, Comp, type, item, text, style, hideWhenDrag, state, ConstOptionsValue,ComponentOptionsChange ,excombo} ) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

 




  useEffect(() => {
    if (Comp === "textbox") {
      const dataTextOptions = [{ id:item.name.substring(0, 3), type: "textbox", class: "form form-control mt-2", style: style, placeholder: item.name + " Bir şeyler yazınız input" }];
      ConstOptionsValue(dataTextOptions);
    }
    else if (Comp === "navbar") {
      const dataTextOptions = [{ id:item.name.substring(0, 3), type: "navbar", class: "form form-control mt-2", style: style, placeholder: item.name + " Bir şeyler yazınız input" }];
      ConstOptionsValue(dataTextOptions);
    }
  }, []);

  const renderComponent = () => {
    const PropChane = (e)  => {
     alert(e)
      ComponentOptionsChange(e.target.id.substring(4))
      }

      
    switch (Comp) {
      case "textbox":
       
        return (
          
          <Textbox
            id={item.name.substring(0, 3)}
            style={style}
            placeholder={item.name + " Bir şeyler yazınız input"}
            PropChange={PropChane}
          />
        );
        case "carousel":
       
        return (
          
          <Carousel
             
          />
        );
      case "Combo":
        return (
          <select name="" className="form form-control mt-2">
            <option value={item.name}>{item.name + " Seçim Yapınız"}</option>
          </select>
        );
      case "navbar":
        return <Navbar />;
      case "Components":
        return (
          <div className="form-group">
            <span className="form-text text-muted btn btn-outline-info" style={style} ref={drag}>
              <span>{text}</span>
              {children}
            </span>
          </div>
        );
      default:
        return (
          <span className={`${styles.draggable} ${isDragging && styles.dragging}`} style={style} ref={drag}>
            <span>{text}</span>
            {children}
          </span>
        );
    }
  };

  if (isDragging && hideWhenDrag) {
    return <div ref={drag}></div>;
  }

  return renderComponent();


}

export default Draggable;
