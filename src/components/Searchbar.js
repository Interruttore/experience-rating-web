import React from 'react'

const Searchbar = () => {


    const search = function(e){
        e.preventDefault();
        const query = document.getElementById("query").value;
        console.log(query);
        //query to search
        getRequest("localhost:9000/api/movie?query=iron&language=en-US&page=1")
        .then((data) =>{
            for (const movie in data) {
                console.log(movie);
            }
        })
    }

    const getRequest = async function (url) {
        console.log("Fetching", url);
        const response = await fetch(url);
        return response.json();
      };



    return (
        <div>
            <form onSubmit={search}>
                <label htmlFor="query">Item to search:</label>
                <input type="text" id="query" name="query"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar;
