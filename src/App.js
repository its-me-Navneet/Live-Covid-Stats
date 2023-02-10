import React, {  useEffect, useState } from 'react'   
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Card from './Components/Card'; 




    export const App = () => {  

      const [list, setlist] = useState([]) ;
      const [Clist, setClist] = useState([]) ;
      const [country, setcountry] = useState("India") ; 
        
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
         setClist(a) ; 
         //console.log(Clist) ;
       
      }  
  
       function Filter(){  

        const b= Clist.filter(x=>{
             return x.Country===country;
          }) 
           setlist(b[0]);
          //console.log(list)    
        } 
        useEffect(()=>{
          Filter();    
        },[Clist]);
 
    useEffect(() => {
         Api()  ; 
       
    }, [])  
   
    function handlechange(e){ 
      
        setcountry(e.target.value) ; 
      
    }  
    function Display(){
      return(<div><Card name="COUNTRY" val= {list.Country}> </Card>  
      <Card name="ACTIVE" val= {list.ActiveCases }> </Card>   
      <Card name="CASES" val= {list.TotalCases }> </Card>   
      <Card name=" DEATH" val= {list.TotalDeaths }> </Card>   
      <Card name="RECOVERED" val= {list.TotalRecovered }> </Card>    
      </div>)
    }     
    function search(){ 
     
         Filter(); 
    
    } 
    
    
  
  return (
    <> 
       <div className="con">  
       <div className="nav"> 
        <div className="heading">
        <h1>Live Covid19 Stats</h1>  
        </div>
        <div className="search">
        <MDBInputGroup>
        <MDBInput label='Search' type="text" id="name" onChange={handlechange} value={country} />
        <MDBBtn onClick={() => search()} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>  
      </div>
      </div>
      <div className="disp">
      {list?Display():""} 
      </div>
      </div>   
    </>
  )
}
export default  App
