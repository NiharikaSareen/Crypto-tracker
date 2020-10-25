//Table Header component to render all the table headers. 
 
import React from 'react';
import './TableHeader.scss';

const TableHeader= ({headers}) =>{
  return (
  <thead className="table-head">
    <tr className="table-head__row">
      {headers.map(({name, id}) =>(
        <th key={id} className="table-head__data">
          {name} 
        </th>
      ))}
    </tr>
  </thead>
  )
}

export default TableHeader;