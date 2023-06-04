import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function Eg1() {
   

  return (
    <>
       <DragGroup>
        <Draggable Comp="Components" type='drag23' text='test' item={{ name: 'test' ,type:"textbox" }} />
        <Draggable Comp="Components" type='drag23' text='İnput' item={{ name: 'ee' ,type:"textbox" }} />
        <Draggable Comp="Components" CompType="Combo" type='drag23' text='ComboBox' item={{ name: 'Vue' ,type:"Combo" }} />
        <Draggable Comp="Components" type='drag23' text='İnput2' item={{ name: 'Angular'  ,type:"Combo"}} />

        <Draggable Comp="Components" type='drag1' text='navbar' item={{ name: 'Angular'  ,type:"navbar"}} />

        <Draggable Comp="Components" type='drag2' text='Corousel' item={{ name: 'Angular'  ,type:"carousel"}} />

        <Draggable Comp="Components" type='dragtest' text='test input' item={{ name: 'Angular'  ,type:"textbox"}} />


      </DragGroup>
      {/* <Droppable accept='drag1' handleDrop={handleDrop} text='Drop it Here!' /> */}
    </>
  );
}

export default Eg1;
