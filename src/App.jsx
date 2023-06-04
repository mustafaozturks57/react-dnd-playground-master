import Content from './components/Content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles/App.css';
import SideBar from './components/SideBar';
import ContainerMain from './components/ContainerMain';
 
import DropHandle from './components/DropHandle';
import { useEffect, useState } from 'react';
import ComponentDetail from './components/ComponentDetail';

import Test from './components/Components/test.jsx';
 
 
function App() {


  const [testfakeData,settestfakeData] = useState([{
   id:"testim2", func :"alert('x gelen bir durum')"
    
  }])


  const [placehol, setplacehol] = useState([])
 
  const [datas, setDatas] = useState([])
 
  const [DropHandleData, setDropHandleData] = useState('')
 
 
  var handleDataChange = (newData) => {
   console.log(newData)
    setplacehol(newData);
  };
 
  const _dropHandleData = (newData) => {
  
     
  };

  const handleDropHandleData = (data) => {
   console.log(data)
    setDatas(data);
  };
 

  function executeMathExpression(expression) {
    const func = new Function(`return ${expression}`);
    func();
    
  }


  const scriptHandle = (e) =>{

  console.log("case2",e)

 

   const deger = testfakeData.filter(x=>x.id == e) 
   
   if(deger[0].func ==undefined){

   alert("bu değer için fonksiyon yok")
  
}else{

  executeMathExpression(deger[0].func)
}

  }
 
  return (

    
    <div className='App'>

    <Test denememiz={scriptHandle}></Test>

{/* <DndProvider backend={HTML5Backend}>
<ContainerMain

children={
<SideBar title='Components'  />  }

children2={
  <DropHandle dropHandleData={handleDropHandleData}   ></DropHandle>   }

  children3={
    <ComponentDetail  data={datas}    ></ComponentDetail>
        }



>





</ContainerMain>
      </DndProvider>

 */}




      
      {/* <DndProvider backend={HTML5Backend}>
        <Content />
      </DndProvider> */}


    
    </div>
  );
}

export default App;
