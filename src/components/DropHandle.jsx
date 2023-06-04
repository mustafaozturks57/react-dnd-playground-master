import React, { useState ,useMemo} from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';
import { useEffect } from 'react';

export default function DropHandle({ dropHandleData , OptionsAllValue}) {
  const [box2, setBox2] = useState([
  
  ]);
  const [box1, setBox1] = useState([]);
  const [box2Nav, setBox2Nav] = useState([]);
  const [OptionsBoxHandle, SetOptionsBoxHandle] = useState([]);
  const [backDroppableValue, SetbackDroppableValue] = useState([]);
  const [myArray, setMyArray] = useState([]);
  const [deger, setdeger] = useState([]);


  const [sorgu, sogru] = useState([]);
  const [dragtest, setdragtest] = useState([]);
  
  
  const handleDropBox = useMemo(() => {
    return (item) => {
       
    
      setMyArray( [...myArray, item ]);
      dropHandleData(item);
    };
  }, [myArray]);

  const   handleDropBoxOptions = useMemo(() => {
    return (item) => {
      console.log("naber",myArray)
      console.log("item",item)
      
     setdeger( myArray.filter(x=> x[0].id==item))
      console.log("deger",deger)
      dropHandleData(deger);
     
    };
  }, [myArray]);

useEffect(()=>{

  dropHandleData(deger);
},[deger])



  const handleBox1 = (item, monitor, state) => {
     
    
    setBox1((prev) => [...prev, { text: item.name, type: item.type }]);
     
    SetOptionsBoxHandle([{ text: item.name, type: item.type }]);
    dropHandleData([{ text: item.name, type: item.type }]); // Veriyi ana bileşene aktar
  };

  const handleBox2  = (item, monitor, state) => {
   
    
   setBox2Nav((prev) => [...prev, { text: item.name, type: item.type }]);
     
    SetOptionsBoxHandle([{ text: item.name, type: item.type }]);
    dropHandleData([{ text: item.name, type: item.type }]); // Veriyi ana bileşene aktar
  };
  const handleBox3  = (item, monitor, state) => {
   
    
    setBox2Nav((prev) => [...prev, { text: item.name, type: item.type }]);
      
     SetOptionsBoxHandle([{ text: item.name, type: item.type }]);
     dropHandleData([{ text: item.name, type: item.type }]); // Veriyi ana bileşene aktar
   };

   const handleBoxTest  = (item, monitor, state) => {
  
    
    setdragtest((prev) => [...prev, { text: item.name, type: item.type }]);
      
     SetOptionsBoxHandle([{ text: item.name, type: item.type }]);
     dropHandleData([{ text: item.name, type: item.type }]); // Veriyi ana bileşene aktar
   };
  

   
  return (
    <>

  <body>
    <div className="container-fluid">

   
    <div className='row mb-3'>
      <div className='col-md-12'>
      <Droppable className="droppablenav"   accept='drag1' handleDrop={handleBox1}      text='Navbar Sürükle'>
    



    
    <DragGroup>
        {box1.map((drag) => (
          <Draggable
            Comp={drag.type}
            key={drag.text}
            type='drag23'
            text={drag.text}
            item={{ name: drag.text }}
            state={box1}
            ConstOptionsValue={handleDropBox}
            ComponentOptionsChange={handleDropBoxOptions}
              
          />
          
        ))}
      </DragGroup>
       </Droppable>
      </div>
    </div>
    <div className='row mb-3'>
      <div className='col-md-12'>
       
      <Droppable className="droppableslider"  accept='drag2' handleDrop={handleBox3}      text='Caousel  Sürükle'>
    
    
    <DragGroup>
        {box2Nav.map((drag) => (
          <Draggable
            Comp={drag.type}
            key={drag.text}
            type='drag2'
            text={drag.text}
            item={{ name: drag.text }}
            state={box2Nav}
            ConstOptionsValue={handleDropBox}
            ComponentOptionsChange={handleDropBoxOptions}

          />
          
        ))}
      </DragGroup>
       </Droppable>
      
      </div>
    </div>
    <div className='row mb-3'>
      <div className='col-md-12'>

      

       <Droppable className="droppable"  accept='dragtest' handleDrop={handleBoxTest} state={box2}>
    
    
    <DragGroup>
        {dragtest.map((drag) => (
          <Draggable
            Comp={drag.type}
            key={drag.text}
            type='dragtest'
            text={drag.text}
            item={{ name: drag.text }}
            state={box2}
            ConstOptionsValue={handleDropBox}
            ComponentOptionsChange={handleDropBoxOptions}

          />
          
        ))}
      </DragGroup>
       </Droppable> 
      </div>
    </div>

    </div>

  </body>
    

    
    
  
      {/* <DragGroup>
        {box1.map((drag) => (
          <Draggable
            Comp={drag.type}
            key={drag.text}
            type='drag23'
            text={drag.text}
            item={{ name: drag.text }}
            state={box2}
            ConstOptionsValue={handleDropBox}
            ComponentOptionsChange={handleDropBoxOptions}

          />
          
        ))}
      </DragGroup> */}
    
    </>
  );
}