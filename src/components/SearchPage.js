import React from 'react';
import { useState } from "react";

import Searchbar from './Searchbar';


const SearchPage = () => {

    const [movies, setMovies] = useState();


    return (
        <div>
            <Searchbar movies={movies} setMovies={setMovies}></Searchbar>
        </div>
    )
}

export default SearchPage;
