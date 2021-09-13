import React from 'react';
import { useState } from "react";
import Searchbar from './Searchbar';

import "../styles/searchpage.css";

const SearchPage = () => {
 
    var [itemsArray, setItemsArray] = useState([]);
    var [typeOfSearch, setTypeOfSearch] = useState("movie");
    var [searched, setSearched] = useState(false);

    return (
        <div className={searched ? "search-page search-page--searched": "search-page"}>
            <div className="search-page--searchbar">
                <Searchbar searched={searched} setSearched={setSearched} setItemsArray={setItemsArray} typeOfSearch={typeOfSearch} setTypeOfSearch={setTypeOfSearch}></Searchbar>
            </div>
            <ul>{itemsArray}</ul>
        </div>
    )
}

export default SearchPage;
