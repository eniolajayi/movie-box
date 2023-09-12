import { Badge } from '@/components/ui/badge';
import { TMDBMovieDetailsResult } from '@/shared/types';
import { poppins } from '@/styles/fonts';
import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

async function getMovieDetails(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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

export default async function MovieDetails({
  params,
}: {
  params: { id: number };
}) {
  const details: TMDBMovieDetailsResult = await getMovieDetails(params.id);
  const releaseDate = new Date(details.release_date);
  const sortedGenresNames = details.genres.map((genre) => genre.name).sort();
  console.log(releaseDate);
  return (
    <section style={poppins.style} className="mt-3">
      <div className="container px-4 py-3 md:container md:mx-auto ">
        <div className="h-[450px] text-center">
          {/* Todo  Extract tmdb image api url as a constant */}
          {details.backdrop_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
              width={700}
              height={450}
              alt={''}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          ) : (
            <div className="mt-3">No Image Available</div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-5 mb-6 mt-12">
          <h1 className=" font-medium leading-normal text-2xl">
            <span data-testid="movie-title">{details.title}</span> .{' '}
            <span data-testid="movie-release-date">
              {releaseDate.getUTCFullYear()}-{releaseDate.getUTCMonth()}-{releaseDate.getUTCDay()}
            </span>{' '}
            .{' '}
            <span>
              <span data-testid="movie-runtime">{details.runtime}</span>
              <span>min</span>{' '}
            </span>
          </h1>
          <div className="flex gap-5">
            {sortedGenresNames.map((genreName) => {
              return <Badge variant={'primary'}>{genreName}</Badge>;
            })}
          </div>
        </div>
        <div>
          <p
            data-testid="movie-overview"
            className="w-[60ch] text-justify text-xl"
          >
            {details.overview}
          </p>
        </div>
        <div className=" h-12 flex items-center">
          <Link
            href={'/'}
            className=" text-rose-700 gap-2 text-lg flex leading-none"
          >
            <span>Go back</span>
            <ChevronLeftIcon size={20} className="flex-shrink-0 " />
          </Link>
        </div>
      </div>
    </section>
  );
}
