import React from 'react';

const Item = (item) => {

    console.log(item.item);
    return (
        <div>
            <p>{item.item.originalTitle} - {item.item.releaseDate}</p>
        </div>
    )
}

export default Item;
