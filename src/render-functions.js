import {refs} from './refs'
import { getMovies,getGenresId } from './films-api'

export async function showMovies() {
    const movies = await getMovies()
    const genres = await getGenresId()
    const markup = movies.map(movie => {
        const movieGenre = movie.genre_ids
        .map(id=>genres.find(g=>g.id === id)?.name)
        .filter(Boolean)
        .map(name=>`<li class="genre_item">${name}</li>`)
        .join('')
    
        return `<li class="movies_item">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" width="320">
          <h2 class="movie_title">${movie.original_title}</h2>
          <ul class="genres_list">${movieGenre}</ul>
          <p class="overview">${movie.overview}</p>
          <p class="vote_average">Rating: ${movie.vote_average}</p>
          <p class="release_date">${movie.release_date}</p>
        </li>`
    }).join('')
    refs.moviesList.innerHTML = markup
    
}

