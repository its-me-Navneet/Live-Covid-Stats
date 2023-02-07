import React, {  useEffect, useState } from 'react'   
// import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
import Card from './Components/Card'; 




    export const App = () => {  

      const [list, setlist] = useState([]) ;
      const [country, setcountry] = useState("Country") ;
      async function Api(){ 
   
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '17806756f2mshb47cf2f3cb06a7fp1212a2jsn1caacee21c8f',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
          }
        };
        
       let a=await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
      
         a=await a.json()   
         setlist(a[3]) ;
       
        // const b= await a.filter(x=>{
        //      return x.Country=={country};
        //   })  
        //   setlist(b[0]) ;
          // console.log(b[0].Country) 
      }
   
 
    useEffect(() => {
        Api()  ;

    }, [])  
   
    // function handlechange(e){ 
     
    //     setcountry(e.target.value) ; 
      
    // }
    
    // function search(){ 
    
    //    console.log(country)
      
    // //  Api();
    // }
  
  return (
    <> 
       <div className="con"> 
        <h1>Live Covid19 stats</h1>  
          
        {/* <MDBInputGroup>
        <MDBInput label='Search' type="text" id="name" onChange={handlechange} value={country} />
        <MDBBtn onClick={() => search()} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>  */}
   
       
      <Card name="COUNTRY" val= {list.Country}> </Card>  
      <Card name="ACTIVE" val= {list.ActiveCases }> </Card>   
      <Card name="CASES" val= {list.TotalCases }> </Card>   
      <Card name=" DEATH" val= {list.TotalDeaths }> </Card>   
      <Card name="RECOVERED" val= {list.TotalRecovered }> </Card>   

      </div> 
    </>
  )
}
export default  App
