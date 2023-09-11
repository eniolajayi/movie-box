import MovieCard from '@/components/movie-card';
import { TMDBResponse } from '@/shared/types';
import { getPercentValue } from '@/shared/utils';
import { Suspense } from 'react';

async function findMovieByTitle(movieTitle: string) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;

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

export default async function SearchDetails({
  params,
}: {
  params: { query: string };
}) {
  const data: TMDBResponse = await findMovieByTitle(params.query);
  return (
    <>
      <h2>
        <span>{data.total_results}</span> Results found
      </h2>
      <section>
        <div>
          
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
        </div>
      </section>
      <div>Page {data.page}</div>
    </>
  );
}
