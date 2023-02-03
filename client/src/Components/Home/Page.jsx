import React from "react";
import './Css/Page.css';

const Page = ({games, gameXPage, page}) => {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil(games / gameXPage); i++){
        pageNumber.push(i + 1);
    };
    
    return (
        <nav className="Contain">
            <ul className="List">
                {pageNumber.map(number => {
                    return (
                        <li className="Item" key={number}>
                            <button className="Num" href='link page' onClick={() => page(number)} >{number}</button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Page;