const Test = ({denememiz}) => {

 


const handedata = (e) =>{

   console.log("testdata",e.target.id)  
   denememiz(e.target.id)
}

   return (
     <div>

 <button id="testim2" onClick={handedata}>deneme</button>

     </div>
   );
 };
 
 export default Test;
 