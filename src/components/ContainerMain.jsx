
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

 
function ContainerMain({ children,children2,children3 }) {
  return (
    <div  className='container-fluild'>
       <div className='row'>
   <div className='col-md-3'>
     
      {children}
 
   </div>
   <div className='col-md-6'>
     
   {children2}
</div>
<div className='col-md-3'>
 
{children3}
</div>
       </div>

     
     
     
    </div>
  );
}

export default ContainerMain;
