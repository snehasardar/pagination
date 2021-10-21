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



/* <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul> */

/*

import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const LastPost = currentPage * postsPerPage;
  const FirstPost = LastPost - postsPerPage;
  const currentPosts = posts.slice(FirstPost, LastPost);
  console.log('index of LastPost', LastPost)
  console.log('index of FirstPost', FirstPost)
  console.log('currentPosts', currentPosts)

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }  
  console.log('setCurrentPage',setCurrentPage)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=100') 
        .then(res => {
            console.log('response',res.data);
            setPosts(res.data)      
        })
        .catch(err => {
            console.log(err);
        })
  }, []);

  return (
    <div className='container'>
      <h3>Todo list</h3>
      <Posts posts={currentPosts}  />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}
        paginate={paginate}/>
    </div>
  );
};

export default App;



*/