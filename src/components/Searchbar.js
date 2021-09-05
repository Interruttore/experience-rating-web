import React from 'react'
import Item from './Item';



const Searchbar = ({setItemsArray}) => {

    const getRequest = async function (url) {
        console.log("Fetching", url);
        const response = await fetch(url);
        return response.json(); 
    };

    const search = function(e){
        e.preventDefault();
        const query = document.getElementById("query").value;
        console.log(query);
        //query to search
        getRequest("http://localhost:9000/api/movie?query=iron&language=en-US&page=1")
        .then((data) =>{
            console.log("Data received: ",data);
            setItemsArray(data.map((item) => (
                <Item item={item} key={item.key}></Item>
            )))

        })

    }


   


    return (
        <div>
            <form onSubmit={search}>
                <label htmlFor="query">Item to search:</label>
                <input type="text" id="query" name="query"></input>
                <select id="searchParameters">
                    <option value="movies">Movies</option>
                    <option value="tv">TV Shows</option>
                    <option value="books">Books</option>
                    <option value="games">Games</option>
                </select>

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar;
