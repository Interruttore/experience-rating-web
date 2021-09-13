import React from 'react'
import Item from "./Item"

const Collection = () => {
    let moviesJSON = localStorage.getItem("movies");
    let moviesArray = [];
    if(moviesJSON !== null){
        if(moviesJSON.length !== 0){
            let movies = JSON.parse(moviesJSON);
            moviesArray = movies.map((item) => (
                <Item item={item} key={item.key} typeOfSearch={"movie"}></Item>
               ) 
           )
        }
    }

    return (
        <div>
            <ul>{moviesArray}</ul>
        </div>
    )
}

export default Collection
