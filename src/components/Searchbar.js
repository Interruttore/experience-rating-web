import React from 'react'
import Item from './Item';

import "../styles/searchbar.css"

const Searchbar = ({setItemsArray, typeOfSearch, setTypeOfSearch}) => {

    let URL;
    let searchString = "Search movies..."; 


    const getRequest = async function (url) {
        console.log("Fetching", url);
        const response = await fetch(url);
        return response.json(); 
    };

    const search = function(e){
        e.preventDefault();
        /*
        console.log("Query:", e.target.query.value)  
        console.log("Search Parameters:", e.target.searchParameters.value)  
        */
        setTypeOfSearch(e.target.searchParameters.value);

        switch (e.target.searchParameters.value) {
            case "movie":
                URL =  `http://localhost:9000/api/${e.target.searchParameters.value}?query=${e.target.query.value}&language=en-US&page=1`;
                break;

            case "tv":
                URL =  `http://localhost:9000/api/${e.target.searchParameters.value}?query=${e.target.query.value}&language=en-US&page=1`;
                break;

            case "book" :
                URL =  `http://localhost:9000/api/${e.target.searchParameters.value}?title=${e.target.query.value}`;
                break;

            case "game":
                URL =  "";
                break;
        
            default:
                break;
        }
        getRequest(URL)
        .then((data) =>{
            console.log("Data received: ", data);
            console.log("typeOfSearch: ", typeOfSearch);
            setItemsArray(data.map((item) => (
                 <Item item={item} key={item.key} typeOfSearch={e.target.searchParameters.value}></Item>
                ) 
            ))
        })
    }

    switch (typeOfSearch) {
        case "movie":
            searchString = "Search movies...";
            break;
        case "tv":
            searchString = "Search TV shows...";
            break;
        case "book":
            searchString = "Search books...";
            break;
        case "game":
            searchString = "Search games...";
            break;
    
        default:
            break;
    }

    return (
        <div>
            <form onSubmit={search} className="queryForm">
                <label htmlFor="query"></label>
                <input className="searchbar" type="text" id="query" placeholder={searchString} name="query"></input>
                <div className="select">
                    <select id="searchParameters" onChange={(e) => {
                                setTypeOfSearch(e.target.value);
                    }}>
                        <option value="movie">Movies</option>
                        <option value="tv">TV Shows</option>
                        <option value="book">Books</option>
                        <option value="game">Games</option>
                    </select>
                    <div className="select_arrow"></div>
                </div>
                <button type="submit" className="submitButton">Search</button>
            </form>
        </div>
    )
}

export default Searchbar;
