
function Add(e, typeOfSearch, itemToAdd) {
    e.preventDefault();
    let item;
    
    //console.log(typeOfSearch, originalTitle, releaseDate, genresName, overview, e.target.dateForm.value, e.target.voteForm.value);
    switch (typeOfSearch) {
        case "movie":
            item = {
                originalTitle: itemToAdd.originalTitle,
                releaseDate: itemToAdd.releaseDate,
                genresName: itemToAdd.genresName,
                overview: itemToAdd.overview,
                posterPath: itemToAdd.posterPath,
                dateWatched: e.target.dateForm.value,
                vote: e.target.voteForm.value
            }
            let movies = [];
            let moviesJSON = localStorage.getItem("movies");
            
            if(moviesJSON !== null){
                if(moviesJSON.length !== 0){
                    console.log("Localastorag data present");
                    movies = JSON.parse(moviesJSON);
                    console.log(movies);
                    if(movies.find(element => element.originalTitle === item.originalTitle && element.releaseDate === item.releaseDate) !== undefined){
                        console.log("Movie already present");
                    }else{
                        movies.push(item);
                    }
                }
            }else{
                movies.push(item);
            }
            localStorage.setItem("movies", JSON.stringify(movies));
            break;

        case "tv":
            item = {
                originalTitle: itemToAdd.originalTitle,
                releaseDate: itemToAdd.releaseDate,
                genresName: itemToAdd.genresName,
                overview: itemToAdd.overview,
                dateWatched: e.target.dateForm.value,
                vote: e.target.voteForm.value
            }
            let tvs = [];
            let tvsJSON = localStorage.getItem("tvs");
            
            if(tvsJSON !== null){
                if(tvsJSON.length !== 0){
                    console.log("Localastorag data present");
                    tvs = JSON.parse(tvsJSON);
                    console.log(tvs);
                    if(tvs.find(element => element.originalTitle === item.originalTitle && element.releaseDate === item.releaseDate) !== undefined){
                        console.log("TV Show already present");
                    }else{
                        tvs.push(item);
                    }
                }
            }else{
                tvs.push(item);
            }
            localStorage.setItem("tvs", JSON.stringify(tvs));
            break;
    


        case "book":
            item = {
                title: itemToAdd.title,
                firstPublishYear: itemToAdd.firstPublishYear,
                dateWatched: e.target.dateForm.value,
                vote: e.target.voteForm.value
            }
            let books = [];
            let booksJSON = localStorage.getItem("books");
            
            if(booksJSON !== null){
                if(booksJSON.length !== 0){
                    console.log("Localastorag data present");
                    books = JSON.parse(booksJSON);
                    console.log(books);
                    if(books.find(element => element.title === item.title && element.firstPublishYear === item.firstPublishYear) !== undefined){
                        console.log("Book already present");
                    }else{
                        books.push(item);
                    }
                }
            }else{
                books.push(item);
            }
            localStorage.setItem("books", JSON.stringify(books));
            break;
        default:
            break;
    }
   
}

export default Add
