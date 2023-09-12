import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges the given class values and returns the merged result.
 * @param {...ClassValue} inputs - The class values to merge.
 * @returns {string} The merged class value.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the percentage value of a number relative to a total.
 * @param {number} num - The number to calculate the percentage for.
 * @param {number} total - The total value.
 * @param {number} [fractionDigit=0] - The number of digits after the decimal point (default is 0).
 * @returns {number} The calculated percentage value.
 */
export function getPercentValue(
  num: number,
  total: number,
  fractionDigit: number = 0,
) {
  //Todo check for edge cases
  return Number.parseInt(((num / total) * 100).toFixed(fractionDigit));
}

// Map of GenreID to GenreName for easy lookup
const genreMap: { [key: number]: string } = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

/**
 * Retrieves the name of a genre based on its ID.
 * @param {number} genreId - The ID of the genre.
 * @returns {string} The name of the genre.
 */
export function getGenreName(genreId: number){
   return genreMap[genreId]
}

/**
 * Retrieves the genre names corresponding to the given genre IDs.
 * @param {number[]} genreIds - The genre IDs to retrieve names for.
 * @returns {string[]} The array of genre names.
 */
export function getGenreNames(genreIds: number[]): string[] {
 return genreIds.map((genreId: number)=> genreMap[genreId])
}