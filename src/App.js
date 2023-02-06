import React, {  useEffect, useState } from 'react'  
import Card from './Components/Card';


    export const App = () => {  

      const [list, setlist] = useState([]) ;
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
         console.log(a[3])  
      }
   
 
    useEffect(() => {
        Api()  ;

    }, [])  
   
    
    
  
  return (
    <>
     
      <Card name="activecases" val= {list.ActiveCases }> </Card>   
      <Card name="totalcases" val= {list.TotalCases }> </Card>   
      <Card name="totaldeath" val= {list.TotalDeaths }> </Card>   
      <Card name="totalrecovered" val= {list.TotalRecovered }> </Card>   

        
    </>
  )
}
export default  App
