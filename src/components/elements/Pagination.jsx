'use client';
import { useState } from "react";


const Pagination = ({data, postPerPage}) => {
    const dataLength = data.length;
    const perPagePosts = Math.round(dataLength / postPerPage);
    const [pageNumber, setPageNumber] = useState(1);
    const [postStart, setPostStart] = useState(0);
    const [postEnd, setPostEnd] = useState(postPerPage);

    const paginationHandler = (number) => { 
        setPageNumber(number);
        setPostStart((postPerPage * number) - postPerPage);
        setPostEnd(postPerPage * number);
    }
        
    return (
      <div className="post-pagination">
        <nav className="navigation pagination" aria-label="Products">
          <ul className="page-numbers">
            {[...Array(perPagePosts)].map((item, index) => (
                <li key={index}>
                    <button className={`page-numbers ${pageNumber === index + 1 ? "current" : ""}`} onClick={()=> paginationHandler(index + 1)}>{index + 1}</button>
                </li>
            ))}
          </ul>
        </nav>
      </div>
    );
}
 
export default Pagination;