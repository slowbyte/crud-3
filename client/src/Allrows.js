import React, {useContext} from 'react';
import { RowsData } from './App';
import './Components.css';

console.log("therows");
function Allrows(){   
  const therows = useContext(RowsData)
   //alert(therows);
  return (
      <div>         
         <div className='rowscontainer'> {therows}</div>
      </div>
  )}

  export default Allrows;