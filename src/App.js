import React, {useState, useEffect} from 'react';
import TableMaker from './components/Table';
import Pagination from './components/Pagination';
import './components/styling/App.scss';


const App =() => {

  const [count, setCount] = useState(0);
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const [dataSetSize, setDataSetSize] = useState(100);
  
  // useEffect(async () =>{
  //   const response = await fetch('https://randomuser.me/api');
  //   const data = await response.json();
  //   const [item] = data.results;
  //   const testing = data.results;

  //   console.log(testing);
  //   setPerson(item);
  // }, []);

  //unchangable API http://jsonplaceholder.typicode.com/users

  // useEffect(() =>{
  //   setLoading(true);
  //   async function fetchData(){
  //     const res = await fetch(`https://randomuser.me/api/?results=${dataSetSize}`);
  //     res
  //       .json()
  //       .then(res=>res.results)
  //       .then(res=>setPerson(res))
  //       .then(setLoading(false));
  //   }

  //   fetchData();
  // }, [dataSetSize]);

  useEffect(() =>{
    setLoading(true);
    async function fetchData(){
      const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
      res
        .json()
        .then(res=>setPerson(res))
        .then(setLoading(false));
    }

    fetchData();
  }, [dataSetSize]);


  //Get current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = person.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <p> You clicked {count}</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <label>Data Size</label>
      <input
        type="number" 
        id="dataSize" 
        value={dataSetSize}
        onChange={(x)=>setDataSetSize(x.target.value)}
        required
        />
        {dataSetSize}

      { loading ? 
          "Loading..." :
          <>
          <TableMaker person={currentPost} />
          <Pagination PerPage={postsPerPage} totalPost={person.length}/>
          </>
      }

    </div>
  );

};

export default App;
