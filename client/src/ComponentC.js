import React, {useContext} from 'react';
import { ColumnNames, RowsData } from './App';
import './ComponentC.css';

function ComponentC(){
  
  const thecolumns = useContext(ColumnNames)
  const therows = useContext(RowsData)

  return (
      <div>
         <container className='container'> {thecolumns}</container> 
         <container className='rowscontainer'> {therows}</container>
      </div>
  )}

  export default ComponentC;


