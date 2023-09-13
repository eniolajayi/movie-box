import next from 'next';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
  },
};

export async function getTopRatedMovies() {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  const res = await fetch(url, {
    ...options,
    next: {
      revalidate: 500,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getMovieDetails(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function findMovieByTitle(movieTitle: string, page: number = 1) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=${page}`;

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
