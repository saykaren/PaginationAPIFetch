import React, {useState} from 'react';
import './styling/pagination.scss';

const Pagination = ({ PerPage, totalPost, paginate, updatePageAmount }) =>{
    const pageNumbers = [];
    const perPage = [];
    const [perPageSelected, setPerPageSelected] = useState(5);

    for(let i=1; i<= Math.ceil(totalPost / PerPage); i++) {
        pageNumbers.push(i);
    }

    for(let i=1; i<= Math.ceil(totalPost); i++) {
        perPage.push(i);
    }



    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            <select
                id="listAmount"
                value={perPageSelected}
                // onChange={(x)=>setPerPageSelected(x.target.value)}
                onChange={(x)=>updatePageAmount(x.target.value)}
            >
                {perPage.map(listAmount=>(
                    <option key={listAmount} value={listAmount}>
                        {listAmount}
                    </option>
                ))}
            </select>
        </nav>
    )
}

export default Pagination