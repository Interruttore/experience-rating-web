import React from 'react';
import { useState } from "react";

import Searchbar from './Searchbar';

const SearchPage = () => {
 
    var [itemsArray, setItemsArray] = useState([]);
    const [typeOfSearch, setTypeOfSearch] = useState("movie");

    return (
        <div>
            <Searchbar setItemsArray={setItemsArray} typeOfSearch={typeOfSearch} setTypeOfSearch={setTypeOfSearch}></Searchbar>
            <ul>{itemsArray}</ul>
        </div>
    )
}

export default SearchPage;
