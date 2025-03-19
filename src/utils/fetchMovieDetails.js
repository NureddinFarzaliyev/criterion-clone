// utility function to fetch detailed movie information from the TMDB API
export const fetchMovieDetails = async (movieName) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;

    const detailsUrl = (id) => {
        return `https://api.themoviedb.org/3/movie/${id}`
    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
        }
    };

    try {
        const searchResponse = await fetch(searchUrl, options);
        const searchResult = await searchResponse.json();

        if (searchResult.results[0]) {
            const detailsResponse = await fetch(detailsUrl(searchResult.results[0].id), options);
            const detailsResult = await detailsResponse.json();
            return detailsResult;
        } else {
            throw new Error("Failed to fetch detailed movie information.");
        }

    } catch (err) {
        console.log(err);
    }
}
