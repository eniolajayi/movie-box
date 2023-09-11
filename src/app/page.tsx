import MovieCard from '../components/movie-card';
import SearchBar from '../components/search-bar';
import { TMDBResponse } from '../shared/types';
import { getPercentValue } from '../shared/utils';

async function getTopRatedMovies() {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data: TMDBResponse = await getTopRatedMovies();

  return (
    <>
      <header>
        <div>MovieBox</div>
        <SearchBar />
      </header>
      <main>
        {data.results.map((result) => {
          const resultDate = new Date(result.release_date);
          const imdbRating = Math.ceil(result.popularity / 100);
          const rtRating = getPercentValue(result.vote_average, 10);

          return (
            <MovieCard
              key={result.id}
              id={result.id}
              title={result.title}
              poster_url={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              release_date={resultDate}
              release_type={''}
              genre=""
              imdb_rating={imdbRating}
              rt_rating={rtRating}
            />
          );
        })}
      </main>
    </>
  );
}
