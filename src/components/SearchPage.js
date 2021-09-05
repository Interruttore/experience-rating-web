import React from 'react';
import { useState } from "react";

import Searchbar from './Searchbar';

const SearchPage = () => {
 
    var [itemsArray, setItemsArray] = useState([]);

    
     
    return (
        <div>
            <Searchbar setItemsArray={setItemsArray}></Searchbar>
            <ul>{itemsArray}</ul>
        </div>
    )
}

export default SearchPage;
