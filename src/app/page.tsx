import Link from 'next/link';
import MovieCard from '../components/movie-card';
import { TMDBResponse } from '../shared/types';
import { getPercentValue } from '../shared/utils';
import { ChevronRightIcon } from 'lucide-react';
import { Suspense } from 'react';

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
  const featMovies = data.results.slice(0, 10);

  return (
    <>
      <section className="mb-3">
        <div className="flex items-center justify-between container px-4 py-3 md:container md:mx-auto ">
          <h2 className=" leading-normal text-4xl font-bold">
            Featured Movies
          </h2>

          <Link
            href={'/'}
            className=" text-rose-700 gap-2 text-lg flex leading-none"
          >
            <span>See more</span>
            <ChevronRightIcon size={20} className="flex-shrink-0 " />
          </Link>
        </div>
      </section>
      <main>
        <div className="px-4 py-3 md:container md:mx-auto min-h-[400px]">
          <div className="grid grid-cols-4 gap-20 ">
            <Suspense fallback={<h1>Loading featured movies...</h1>}>
              {featMovies.map((result) => {
                const resultDate = new Date(result.release_date);
                const imdbRating = Math.ceil(result.popularity / 100);
                const rtRating = getPercentValue(result.vote_average, 10);

                return (
                  <MovieCard
                    key={result.id}
                    id={result.id}
                    title={result.title}
                    poster_url={result.poster_path}
                    release_date={resultDate}
                    release_type={''}
                    genre=""
                    imdb_rating={imdbRating}
                    rt_rating={rtRating}
                  />
                );
              })}
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
