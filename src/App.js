import React, {useState, useEffect} from 'react';

import './App.css';


const App =() => {

  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // useEffect(async () =>{
  //   const response = await fetch('https://randomuser.me/api');
  //   const data = await response.json();
  //   const [item] = data.results;
  //   const testing = data.results;

  //   console.log(testing);
  //   setPerson(item);
  // }, []);

  useEffect(() =>{
    setLoading(true);
    async function fetchData(){
      const res = await fetch('https://randomuser.me/api/?results=100');
      res
        .json()
        .then(res=>res.results)
        .then(res=>setPerson(res))
        .then(setLoading(false));
        // .then(res=>res.map(x=>setPerson(x)));
    }

    fetchData();
  }, []);

  return (
    <div>
      <p> You clicked {count}</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      {person && person.map((x)=>(
        <>
        <table>
          <thead>
            <tr>
              <th key={`column1`}>First Name</th>
              <th>Last Name</th>
              <th>ID </th>
            </tr>
          </thead>
          <tbody key={`body${x.login.uuid}`}>
            <tr key={x.login.uuid}>
              <td
                key={x.login.uuid+x.name.first}
              >{x.name.first}</td>
              <td
                key={x.login.uuid+x.name.last}
              >{x.name.last}</td>
              <td
                key={x.login.uuid+x.name.title}
              >{x.login.uuid}</td>
            </tr>
          </tbody>
        </table>
        <div
          key={x.login.uuid}
        >
          {x.name.last}
          {x.login.uuid}
        </div>
        </>
      ))}
        
    
      <div>Hello</div>
      { person && <div>{person.map(x=>x.name.last)}</div>}
    </div>
  );
};

export default App;
