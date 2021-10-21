import React,{useState, useEffect} from 'react';
import Pagination from "react-js-pagination";
import axios from 'axios';
import TodoList from './components/TodoList';

function App ()  {

  const [posts, setPosts] = useState([]);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  // const [totalItemsCount, setTotalItemsCount] = useState(20);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5)

  

    const LastPost = activePage * itemsCountPerPage;
     const FirstPost = LastPost - itemsCountPerPage;
     const currentPosts = posts.slice(FirstPost, LastPost);
     console.log('index of LastPost', LastPost)
     console.log('index of FirstPost', FirstPost)
     console.log('currentPosts', currentPosts)

  
  
  
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage( pageNumber);    
   console.log('pageNumber',pageNumber)
  } 
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20') 
        .then(res => {
            console.log('response',res.data);
            setPosts(res.data)      
        })
        .catch(err => {
            console.log(err);
        })
  }, []);

    return (
      <div className="App">
        <TodoList  
        posts ={currentPosts} 
        />
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={posts.length}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={handlePageChange}
        />
        
      </div>
    );
  
  
}

export default App;


import React from 'react';

const Posts = ({ posts }) => {

  return (
    <div className='container'>
      <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Title</th>
                    </tr>
                </thead>
				<tbody>
					{posts?.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.title}</td>
								</tr>
							);
					})}
				</tbody>
			</table>      
    </div>
  );
};

export default Posts;
