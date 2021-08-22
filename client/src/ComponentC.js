import React, {useContext} from 'react';
import { ColumnNames } from './App';

function ComponentC(){
  
  const thecolumns = useContext(ColumnNames)
  //const name2 = useContext(ChannelContext)

  return (
      <div>
          {thecolumns}
      </div>
  )}

  export default ComponentC;


