import { TMDBMovieDetailsResult } from '@/shared/types';
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
  console.log(releaseDate);
  return (
    <>
      <main>
        <h1>
          <span data-testid="movie-title">{details.title}</span>
          {" "}
          <span data-testid="movie-release-date">
            {releaseDate.toUTCString()}
          </span>
          {" "}
          <span data-testid="movie-runtime">{details.runtime}min</span>
        </h1>
      </main>
      <p data-testid="movie-overview">{details.overview}</p>
      <Link href={"/"}>Go back</Link>
    </>
  );
}
