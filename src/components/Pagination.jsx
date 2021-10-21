import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];
  //[1,2]
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log('pageNumbers', pageNumbers)
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;





// import React from 'react';
// import _ from 'lodash'

// const Pagination = props => {

//     const { totalItemsCount, pageRangeDisplayed, activePage, onPageChange } = props;
//     console.log('currentPage', activePage)
//     // const pageCount = totalCount / pageSize ;
//     const pageCount = Math.ceil(totalItemsCount / pageRangeDisplayed) ;
//     if(pageCount == 1) return null;
//     const pages = _.range(1, pageCount + 1);//[1, ....pagecount]
//     console.log('pages ',pages)
//     return(
//         <div className='container'>
//             <nav >
//             <ul className="pagination">
//                 {
//                     pages.map((page, index) => {
//                         <li key={index} className="page-item">
//                             <a className="page-link" onClick={() => props.onPageChange(page)} >{page}</a>
//                         </li>
//                     })
//                 }
                
                
//             </ul>
//             </nav>
//         </div>
//     )

// } 
// export default Pagination;





// import React from 'react';
// import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
// // import './pagination.scss';
// const Pagination = props => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <ul
//       className={classnames('pagination-container', { [className]: className })}
//     >
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange.map(pageNumber => {
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }

//         return (
//           <li
//             className={classnames('pagination-item', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;
