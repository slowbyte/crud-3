import React, {useContext} from 'react';
import { ColumnNames } from './App';
import './Components.css';

function Columnnames(){
  
  const thecolumns = useContext(ColumnNames)  

  return (
      <div>
         <div className='container'> {thecolumns}</div>        
      </div>
  )}

  export default Columnnames;