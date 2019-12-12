import React from 'react'

const TableMaker = ({ person, loading}) =>{
    

    return(
        <table>
          <thead>
                <tr>
                  <th key={`column1`}>Name</th>
                  <th>User Name</th>
                  <th>Email </th>
                </tr>
          </thead>
          <tbody>
              {person && person.map((x)=>(
                <tr key={x.id}>
                  <th
                    key={x.id+x.name}
                  >{x.name}</th>
                  <th
                    key={x.username}
                  >{x.username}</th>
                  <th
                    key={x.id+x.email}
                  >{x.email}</th>
                </tr>
              ))}
          </tbody>
        </table>

    )
}

export default TableMaker;