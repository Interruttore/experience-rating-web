import React from 'react';
import { useState } from "react";

import Searchbar from './Searchbar';
import Item from './Item';


const SearchPage = () => {
 
    const [items, setItems] = useState();
    var itemArray = items.map(movie => (
        <Item movie={movie}></Item>
    ))

    return (
        <div>
            <Searchbar items={items} setItems={setItems}></Searchbar>
        </div>
    )
}

export default SearchPage;
