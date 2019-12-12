import React from 'react';
import './styling/pagination.scss';

const Pagination = ({ PerPage, totalPost }) =>{
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPost / PerPage); i++) {
        pageNumbers.push(i);
    }
    console.log({pageNumbers});
    console.log({PerPage});
    console.log({totalPost});

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination