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

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }

  const updatePageAmount = (perPageSelected) =>{
    setPostsPerPage(perPageSelected);
  }

  const quantityPerPage = (event) =>{
    const result = event.target.value;
    console.log(result);
    console.log(typeof(result));
    
    // if(result> 0 && result !==)
    // setPostsPerPage(x.target.value)
  }

  return (
    <div>
      <p> You clicked {count}</p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <label>Page Size</label>
      <input
        type="number" 
        id="dataSize" 
        value={postsPerPage}
        onChange={(x)=>quantityPerPage(x)}
        //setPostsPerPage(x.target.value)
        required
        />
        {postsPerPage}

      { loading ? 
          "Loading..." :
          <>
          <TableMaker person={currentPost} />
          <Pagination PerPage={postsPerPage} totalPost={person.length} paginate={paginate} updatePageAmount={updatePageAmount}/>
          </>
      }

    </div>
  );

};

export default App;
