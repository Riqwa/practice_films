import axios from "axios";




const filmsWebsite = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: import.meta.env.VITE_TMDB_KEY,
        

    }

})


export async function getMovies(page = 1) {
    try{
        const res = await filmsWebsite.get('/movie/popular', {page: {page},})
        
    return res.data.results
}
catch(e){
        console.error(e);
        
    }
}

export async function getGenresId() {
    try{
        const res = await filmsWebsite.get('/genre/movie/list')
        
        return res.data.genres;
        
    }catch(e){
        console.error(e);
        
    }
    
}
