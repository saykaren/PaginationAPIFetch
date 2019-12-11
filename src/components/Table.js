import React from 'react'

const TableMaker = ({ person, loading}) =>{
    

    return(
        <table>
          <thead>
                <tr>
                  <th key={`column1`}>First Name</th>
                  <th>Last Name</th>
                  <th>Email </th>
                </tr>
          </thead>
          <tbody>
              {person && person.map((x)=>(
                <tr key={x.login.uuid}>
                  <th
                    key={x.login.uuid+x.name.first}
                  >{x.name.first}</th>
                  <th
                    key={x.login.uuid+x.name.last}
                  >{x.name.last}</th>
                  <th
                    key={x.login.uuid+x.email}
                  >{x.email}</th>
                </tr>
              ))}
          </tbody>
        </table>

    )
}

export default TableMaker;