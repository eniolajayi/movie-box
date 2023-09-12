import Image from 'next/image';
import imdbIcon from '../assets/imdb-icon.png';
import rottenTomatoesIcon from '../assets/rotten-tomatoes-icon.png';
import { Movie } from '../shared/types';
import Link from 'next/link';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';
import { Suspense } from 'react';

export type MovieCardProps = Movie;

export default function MovieCard({
  title,
  poster_url,
  release_date,
  release_type,
  genre,
  imdb_rating,
  rt_rating,
  id,
}: MovieCardProps) {
  return (
    <div data-testid="movie-card" className="w-[250px] min-h-[450px]">
      <div className="">
        <div className="mb-3 relative">
          <div className="w-full absolute flex top-1 left-0">
            <div className="flex-1">{release_type}</div>
            <Button size={'icon'} variant={'ghost'} className="rounded-full">
              <HeartIcon />
            </Button>
          </div>
          <figure className="w-[250px] h-[370px]">
              <Image
                src={poster_url}
                width={250}
                height={370}
                alt="The movie poster for the movie"
                data-testid="movie-poster"
                className="w-full h-full object-cover"
              />
          </figure>
        </div>
        <div className="flex-col flex gap-3">
          <span
            data-testid="movie-release-date"
            className="flex-grow text-gray-400 text-xs leading-normal uppercase"
          >
            USA, {release_date.getUTCFullYear()}
          </span>
          <h3 className="flex-grow">
            <Link
              data-testid="movie-title"
              href={`/movies/${id}`}
              className=" text-lg font-bold leading-normal  hover:text-rose-500 ease-in-out"
            >
              {title}
            </Link>
          </h3>
          <div className="w-full flex flex-grow justify-between ">
            <div className="flex gap-2">
              <Image src={imdbIcon} width={35} height={17} alt="" />
              <small className="">{imdb_rating}.0 / 100</small>
            </div>
            <div className="flex gap-2">
              <Image src={rottenTomatoesIcon} width={16} height={17} alt="" />
              <small className="">{rt_rating}%</small>
            </div>
          </div>
          <p>{genre}</p>
        </div>
      </div>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
        fill="#D1D5DB"
      />
    </svg>
  );
}
