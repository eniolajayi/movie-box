'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

type SearchBarProps = {};

export default function SearchBar({}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearchInputChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="search" value={query} onChange={handleSearchInputChanges} />
      <button type="submit">Search</button>
    </form>
  );
}
