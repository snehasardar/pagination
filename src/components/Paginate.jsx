import React from 'react';
import _ from 'lodash'

const Paginate = props => {

    const { totalCount, pageSize } = props;
    const pageCount = totalCount / pageSize ;
    const pages = _.range(1, pageCount + 1);//[1, ....pagecount]

    return(
        <div className='container'>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pages.map((page, index) => {
                        <li key={index} className="page-item">
                            <a className="page-link" >{page}</a>
                        </li>
                    })
                }
                
                
            </ul>
            </nav>
        </div>
    )

} 
export default Paginate;