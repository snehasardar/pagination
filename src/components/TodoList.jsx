import axios from 'axios';
import React from 'react'
const TodoList = ({posts}) => {
    // const { posts, activePage, itemsCountPerPage } = props;
    
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
					{ posts &&
                    posts.map((item, index) => {
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
