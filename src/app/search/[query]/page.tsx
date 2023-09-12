import MovieCard from '@/components/movie-card';
import { findMovieByTitle } from '@/shared/tmdb';
import { TMDBResponse } from '@/shared/types';
import { getGenreNames, getPercentValue } from '@/shared/utils';
import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default async function SearchDetails({
  params,
}: {
  params: { query: string };
}) {
  const data: TMDBResponse = await findMovieByTitle(params.query);

  if (data.total_results == 0) {
    return (
      <section className="mt-12">
        <div className="px-4 py-3 md:container md:mx-auto min-h-[300px] text-center flex gap-8 flex-col justify-center items-center">
          <h1 className="font-bold text-gray-600 text-2xl ">
            No Results found for <span className="">"{params.query}"</span>
          </h1>
          <Link
            href={'/'}
            className=" text-rose-700 gap-2 text-lg flex leading-none"
          >
            <ChevronLeftIcon size={20} className="flex-shrink-0 " />
            <span>Go back</span>
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="mt-12">
      <div className="px-4 py-3 md:container md:mx-auto min-h-[400px]">
        <div className=" h-14 mb-3 flex flex-wrap justify-between">
          {/* Todo make a reusable button out of 'Go back' link */}
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
        <div className="w-full grid lg:gap-20 md:gap-5 xs:gap-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.results.map((result) => {
            const resultDate = new Date(result.release_date);
            const imdbRating = getPercentValue(result.vote_average, 10);
            const rtRating = getPercentValue(result.popularity / 100, 10);
            const genreNames = getGenreNames(result.genre_ids);

            return (
              <MovieCard
                key={result.id}
                id={result.id}
                title={result.title}
                poster_url={result.poster_path}
                release_date={resultDate}
                release_type={''}
                genres={genreNames}
                imdb_rating={imdbRating}
                rt_rating={rtRating}
              />
            );
          })}
        </div>
        {/* Todo Add Pagination */}
        <div className="my-9 w-full text-center">
          <span>Page {data.page} </span>
          <span>of {'  '}</span>
          <span>{Math.ceil(data.total_results / data.results.length)}</span>
        </div>
      </div>
    </section>
  );
}
