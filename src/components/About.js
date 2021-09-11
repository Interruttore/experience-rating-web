import React from 'react'
import "../styles/about.css"

const About = () => {
    return (
        <div>
            <div className="about--container">
            <h1>About the site</h1>
                <div className="section-container">
                    <img className="logo" alt="the movie database logo" src="/tmdb_logo.svg"></img>
                    <div className="inner-container">
                        <h2 className="title">TMDB API</h2>
                        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                        <p>This site us the TMDB API to search for Movies and TV Shows</p>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">The Movie Database</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://developers.themoviedb.org/3/getting-started/introduction">TMDB API Information</a></li>
                        </ul>
                    </div>
               </div>
                <div className="section-container">
                    <img className="logo" alt="the open library logo" src="/open_library_logo.svg"></img>
                    <div className="inner-container">
                        <h2 className="title">Open Library API</h2>
                        <p>This product uses the Open Library API but is not endorsed or certified by TMDB.</p>
                        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://openlibrary.org/">Open Library</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://openlibrary.org/developers/api">Open Library API Information</a></li>
                        </ul>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default About;
