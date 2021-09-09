import React, { useEffect } from 'react';
import "../styles/item.css"

const Item = ({item, typeOfSearch}) => {

    useEffect(() => {
        document.getElementById("dateForm").valueAsDate = new Date();
    })
    if(typeOfSearch === "movie" || typeOfSearch === "tv"){
        return (
            <div className="container">
                <img className="poster" alt="poster" src={"https://image.tmdb.org/t/p/original/" + item.posterPath}></img>
                <div className="innerContainer">
                    <h2 className="title" >{item.originalTitle} ({item.releaseDate.slice(0, 4)})</h2>
                    <span className="date">Release date: {item.releaseDate}</span>
                    <span className="genres">{item.genresName.join(", ")}</span>
                    <p className="overview">{item.overview}</p>

                    <form className="form">
                        <div className="formInput">
                            <div className="innerFormInput tooltip">
                                <label htmlFor="voteForm">Vote</label>
                                <span className="tooltiptext">Vote goes from 0 to 10</span>
                                <input className="voteForm" type="number" id="voteForm" name="vote" min="0" max="10" defaultValue="0"></input>
                            </div>
                            <div className="innerFormInput tooltip">
                                <label htmlFor="voteForm">Date Watched</label>
                                <span className="tooltiptext">Specify the date</span>
                                <input className="dateForm" type="date" id="dateForm" name="dateForm" ></input>
                            </div>
                        <button type="submit" className="submitButton">Add to collection</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    if(typeOfSearch === "book"){
        return(
            <div className="container">
                <img className="poster" alt="poster" src={"http://covers.openlibrary.org/b/isbn/" + item.isbn + "-M.jpg"}></img>
                <div className="innerContainer">
                    <h2 className="title" >{item.title} ({item.firstPublishYear})</h2>
                
                    <form className="form">
                        <div className="formInput">
                            <div className="innerFormInput tooltip">
                                <label htmlFor="voteForm">Vote</label>
                                <span className="tooltiptext">Vote goes from 0 to 10</span>
                                <input className="voteForm" type="number" id="voteForm" name="vote" min="0" max="10" defaultValue="0"></input>
                            </div>
                            <div className="innerFormInput tooltip">
                                <label htmlFor="voteForm">Date Read</label>
                                <span className="tooltiptext">Specify the date</span>
                                <input className="dateForm" type="date" id="dateForm" name="dateForm" ></input>
                            </div>
                        <button type="submit" className="submitButton">Add to collection</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Item;
