import React, { useEffect } from 'react';
import "../styles/item.css"
import "../styles/buttons.css"

const Item = ({item, typeOfSearch}) => {

    useEffect(() => {
        document.getElementById("dateForm").valueAsDate = new Date();
    })

    if(typeOfSearch === "movie" || typeOfSearch === "tv"){
        let posterPath;
        if(item.posterPath !== null){
            posterPath = "https://image.tmdb.org/t/p/original/" + item.posterPath;
        }else{
            posterPath = '/missing_poster.png';
        }
        return (
            <div className="item--container">
                <img className="poster poster-border" alt="poster" src={posterPath}></img>
                <div className="inner-container">
                    <h2 className="title" >{item.originalTitle} ({item.releaseDate.slice(0, 4)})</h2>
                    <span className="date">Release date: {item.releaseDate}</span>
                    <span className="genres">{item.genresName.join(", ")}</span>
                    <p className="overview">{item.overview}</p>

                    <form className="form">
                        <div className="form-input">
                            <div className="inner-form-input tooltip">
                                <label htmlFor="voteForm">Vote</label>
                                <span className="tooltip-text">Vote goes from 0 to 10</span>
                                <input className="voteForm" type="number" id="voteForm" name="vote" min="0" max="10" defaultValue="0"></input>
                            </div>
                            <div className="inner-form-input tooltip">
                                <label htmlFor="voteForm">Date Watched</label>
                                <span className="tooltip-text">Specify the date</span>
                                <input className="dateForm" type="date" id="dateForm" name="dateForm" ></input>
                            </div>
                        <button type="submit" className="submit-button bn1"><i className="far fa-plus-square"></i> Add to collection</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    if(typeOfSearch === "book"){
        return(
            <div className="item--container">
                <img className="poster poster-border" alt="cover" src={"http://covers.openlibrary.org/b/isbn/" + item.isbn + "-M.jpg"}
                 onError={(e) => {
                    e.target=null; 
                    e.target.src='../../public/missing_cover.png';
                    
                }}
                ></img>
                <div className="inner-container">
                    <h2 className="title" >{item.title} ({item.firstPublishYear})</h2>
                
                    <form className="form">
                        <div className="form-input">
                            <div className="inner-form-input tooltip">
                                <label htmlFor="voteForm">Vote</label>
                                <span className="tooltip-text">Vote goes from 0 to 10</span>
                                <input className="voteForm" type="number" id="voteForm" name="vote" min="0" max="10" defaultValue="0"></input>
                            </div>
                            <div className="inner-form-input tooltip">
                                <label htmlFor="voteForm">Date Read</label>
                                <span className="tooltip-text">Specify the date</span>
                                <input className="dateForm" type="date" id="dateForm" name="dateForm" ></input>
                            </div>
                        <button type="submit" className="submit-button">Add to collection</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Item;
