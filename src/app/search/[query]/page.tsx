import MovieCard from '@/components/movie-card';
import { TMDBResponse } from '@/shared/types';
import { getPercentValue } from '@/shared/utils';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
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
    <section className="mt-12">
      <div className="px-4 py-3 md:container md:mx-auto min-h-[400px]">
        <div className=" h-14 mb-3 flex justify-between">
          <Link
            href={'/'}
            className=" text-rose-700 gap-2 text-lg flex leading-none"
          >
            <ChevronLeftIcon size={20} className="flex-shrink-0 " />
            <span>Go back</span>
          </Link>
          <h2>
            <span className=" text-rose-700 font-bold">
              {data.total_results}
            </span>{' '}
            Results found
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-20 ">
          {data.results.map((result) => {
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
        </div>
        {/* Todo Add Pagination */}
        <div className="my-9 w-full text-center">
          <span>Page {data.page} </span>
          <span>of {"  "}</span>
          <span>{Math.floor(data.total_results / data.results.length)}</span>
        </div>
      </div>
    </section>
  );
}
