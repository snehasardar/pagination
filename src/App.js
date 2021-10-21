import React,{Component} from 'react';
import Pagination from "react-js-pagination";
import axios from 'axios';
import TodoList from './components/TodoList';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      itemsCountPerPage : 5,
      activePage : 15,
      totalItemsCount : 20,
      pageRangeDisplayed : 5,
      posts : [],
    }
  }
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});    
   console.log('pageNumber',pageNumber)
  } 
  
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20')
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  
  render(){
    return (
      <div className="App">
        <TodoList  
        posts ={this.state.posts} 
        activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={this.state.pageRangeDisplayed}/>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange.bind(this)}
        />
        
      </div>
    );
  }
  
}

export default App;