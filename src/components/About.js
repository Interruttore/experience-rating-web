import "../styles/about.css"
import React from 'react'

const About = () => {
    return (
        <div className="about--container">
            <h1>About the site</h1>
            <div className="section-container">
                <img className="logo" alt="the movie database logo" src="/tmdb_logo.svg"></img>
                <div className="inner-container">
                    <h2 className="title">TMDB API</h2>
                    <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                    <p>This site us the TMDB API to search for Movies and TV Shows</p>
                    <ul className="api-list">
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
                    <ul className="api-list">
                        <li><a target="_blank" rel="noreferrer" href="https://openlibrary.org/">Open Library</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://openlibrary.org/developers/api">Open Library API Information</a></li>
                    </ul>
                </div>
            </div>
            <div className="section-container contacts">
                <div className="inner-container">
                    <h2 className="title">Contacts:</h2>
                    <ul className="contacts-list">
                        <li>
                        <i className="fas fa-envelope icon"></i>
                        E-mail: <span>andrea.pietronave.97@gmail.com</span>   
                        </li>
                        <li>
                        <i className="fab fa-github icon"></i>
                        Github: <a target="_blank" rel="noreferrer" href="https://github.com/Interruttore">https://github.com/Interruttore</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;
