import Link from 'next/link';
import MovieCard from '../components/movie-card';
import { TMDBResponse } from '../shared/types';
import { getGenreNames, getPercentValue } from '../shared/utils';
import { ChevronRightIcon } from 'lucide-react';
import { Suspense } from 'react';
import HeroSection from './hero';
import { getTopRatedMovies } from '@/shared/tmdb';

export default async function Home() {
  const data: TMDBResponse = await getTopRatedMovies();
  const featMovies = data.results
    .slice(0, 10)
    .sort((a, b) => b.vote_average - a.vote_average);

  return (
    <>
      <section className="mb-3">
        <HeroSection />

        <div className="flex items-center justify-between container flex-wrap px-4 py-3 md:container md:mx-auto ">
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
        <div className="px-4 py-3 container mx-auto min-h-[400px]">
          <div
            className="w-full grid lg:gap-20 md:gap-5 xs:gap-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
           
          >
            <Suspense fallback={<h1>Loading featured movies...</h1>}>
              {featMovies.map((result) => {
                // Todo Cleanup
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
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
