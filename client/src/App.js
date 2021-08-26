import React from 'react';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import ComponentC from './ComponentC';


//export const UserContext = React.createContext() //stuff
export const ColumnNames = React.createContext()
export const RowsData = React.createContext()

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [Colnames, setColnames] = useState('');
  const [rowsData, setRowsData] = useState('');
  

  const butHandler = (() => {
   //console.log(name,age,country,position,salary)
   axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      salary: salary,
   }).then(() => {
      console.log('success')
   })
 
 });

 const but2Handler = ((columnNames) => {
   //console.log(name,age,country,position,salary)
   axios.get('http://localhost:3001/columnnames').then((response) => { 
      console.log('button2Handler response ... ', response)
      
      const theData = response.data;  
      let columnNames = theData.map((element) => {
         return element.COLUMN_NAME + ", ";
      });    
      setColnames(columnNames)     
   });                                                    
});

const but3Handler = ((rowValues) => {
   //var rowValues = '';
   var finalResult =[];
   console.log('but3Handler clicked')
   axios.get('http://localhost:3001/allrows').then((response) => { 
      //console.log('button3Handler response ... ', response)
      
      const theData2 = response.data;
      let obj0 = theData2[0];
      //alert(obj0) 
      //alert(Object.values(obj0));  
      let obj0Values = Object.values(obj0);  
      //alert(obj0Values);
      //alert(obj0Values[3]);

      //begin map function......
      let rowValues = theData2.map((element) => {            
      //let rowValues = obj.map((element) => {
      //return element.name + ", " //works
       
      finalResult = finalResult + Object.values(element) + "\r\n";
      //alert(Object.values(element)); //element is an object here; and for each row of database this alert fires off
      //alert( finalResult + "\r\n");
      
      return element + ", " //works
       
      }); 
      //end of map function......  
       alert(`${finalResult}`);
       setRowsData([...finalResult]) // the 2nd useState is being set now...
       //alert('rV = ' + Object.values(finalResult));    
   });        
                                              
});
      
return (
   <div className="App">
      
    <div className="inputs">
      <label>Name: </label>
      <input type="text" onChange={(event) => { 
         setName(event.target.value);}} />
      <label>Age: </label> 
      <input type="number" onChange={(event) => { 
         setAge(event.target.value);}} />          
      <label>Country: </label>
      <input type="text" onChange={(event) => { 
         setCountry(event.target.value);}} />
      <label>Position: </label>
      <input type="text" onChange={(event) => { 
         setPosition(event.target.value);}} />
      <label>Salary: </label>
      <input type="number" onChange={(event) => { 
         setSalary(event.target.value);}} />
      <div className="buttons">  
         <button onClick={butHandler}>Add Employee</button>
         <button onClick={but2Handler}>ColumnNames</button>
         <button onClick={but3Handler}>Get All Rows</button>
      </div> 
      </div> 
      
      <ColumnNames.Provider value={ Colnames }>                         
            <ComponentC />        
      </ColumnNames.Provider>
      <RowsData.Provider value={ rowsData }>                         
            <ComponentC />        
      </RowsData.Provider>
    </div>
         )};

export default App;
