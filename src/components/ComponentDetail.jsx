import React from 'react';
import ReactDOM from 'react-dom';

export default function ComponentDetail(props){

   const { data,placeholder } = props;

   console.log("keslan",data)
   console.log("keslanid",data[0])
   const propchange = (e) =>{
 
  
   }

   if (data.length >0) {
      return(

         <div className="container-fluild">
      
      
      
      <div className="card">
             <div className='card-header'>
               <h4>Component Ayarlar</h4>
             </div>
             <div className="card-body">
             <div className="row mb-3">
                  <div className="col-md-6">
                  
               ID :
                  </div>
                  <div className="col-md-6">
                     <input type="text"  className='form-control' 
                    onChange={propchange} 
                     
                     value={data.length > 0 ? (data[0].id || (data[0][0] && data[0][0].id) || '') : ''}/>
                    
                  </div>
               </div>
                
               <div className="row mb-3">
                  <div className="col-md-6">
                  
               placeholder :
                  </div>
                  <div className="col-md-6">
                     <input type="text"  className='form-control'   value={data.length > 0 ? (data[0].placeholder || (data[0][0] && data[0][0].placeholder) || '') : ''}/>
                 
                  </div>
               </div>
                
               <div className="row mb-3">
                  <div className="col-md-6">
                  
               Class Name :
                  </div>
                  <div className="col-md-6">
                  <input type="text" className='form-control'  value={data.length > 0 ? (data[0].class || (data[0][0] && data[0][0].class) || '') : ''}/>
                  
                  </div>
               </div>
               <div className="row mb-3">
                  <div className="col-md-6">
                  
               Type :
                  </div>
                  <div className="col-md-6">
                  <input type="text"   className='form-control'   value={data.length > 0 ? (data[0].type || (data[0][0] && data[0][0].type) || '') : ''}/>
                  
                  </div>
               </div>
             </div>
             </div>
         </div>
         
      )
   }
      else{
         return(

            <div className="container-fluild">
      
      
      
       
         </div>
         
         )
      }
   }



 