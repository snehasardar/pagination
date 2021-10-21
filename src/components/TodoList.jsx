import axios from 'axios';
import React from 'react'
const TodoList = (props) => {
    const { posts, activePage, itemsCountPerPage } = props;
    
    
     const LastPost = activePage * itemsCountPerPage;
     const FirstPost = LastPost - itemsCountPerPage;
     const currentPosts = posts.slice(FirstPost, LastPost);
     console.log('index of LastPost', LastPost)
     console.log('index of FirstPost', FirstPost)
     console.log('currentPosts', currentPosts)
    
    return(
        <div className='container  mt-5'>
            <h5>Todo list</h5>
            <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Title</th>
                    </tr>
                </thead>
				<tbody>
					{ currentPosts &&
                    currentPosts.map((item, index) => {
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
    )
}
export default TodoList;
