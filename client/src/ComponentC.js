import React, {useContext} from 'react';
import { ColumnNames, RowsData } from './App';
import './ComponentC.css';

function ComponentC(){
  
  const thecolumns = useContext(ColumnNames) 
  const therows = useContext(RowsData)

  return (
      <div>
         <div className='container'> {thecolumns}</div> 
         <div className='rowscontainer'> {therows}</div>
      </div>
  )}

  export default ComponentC;


