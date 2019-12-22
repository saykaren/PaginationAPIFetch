import React, {useState, useEffect} from 'react';
import TableMaker from './components/Table';
import Pagination from './components/Pagination';
import './components/styling/App.scss';


const App =() => {

  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  // const [dataSetSize, setDataSetSize] = useState(100);
  
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
  }, []);


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

  return (
    <div id="main-app">
      <h2>Users</h2>
      { loading ? 
          "Loading..." :
          <>
          <TableMaker person={currentPost} />
          <Pagination PerPage={postsPerPage} totalPost={person.length} paginate={paginate} updatePageAmount={updatePageAmount} perPageSelected={postsPerPage} currentPage={currentPage}/>
          </>
      }

    </div>
  );

};

export default App;
