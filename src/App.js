import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";
import TodoList from "./components/TodoList";

function App() {
  const [posts, setPosts] = useState([]);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  // const [totalItemsCount, setTotalItemsCount] = useState(20);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const totalPosts = 100;
  const lastPost = activePage * itemsCountPerPage;
  const firstPost = lastPost - itemsCountPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);
  console.log("index of lastPost", lastPost);
  console.log("index of firstPost", firstPost);
  console.log("currentPosts", currentPosts);

  // const handlePageChange = (pageNumber) => {
  //   console.log(`active page is ${pageNumber}`);
  //   fetchTodoList(first, last);
  //   setActivePage(pageNumber);
  //   console.log("pageNumber", pageNumber);
  // };

  const fetchTodoList = (start, end) => {
    setIsLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${end}`
      )
      .then((res) => {
        console.log("response", res.data);
        setTimeout(() => {
          setIsLoading(false);
          setPosts(res.data);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodoList(firstPost, lastPost);
  }, [activePage]);

  return (
    <div className="App">
      <TodoList posts={currentPosts} isLoading = {isLoading} />
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalPosts}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={(currentPage) => setActivePage(currentPage)}
      />
    </div>
  );
}

export default App;
