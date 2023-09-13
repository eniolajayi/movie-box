'use client';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

type SearchBarProps = {
  label: string;
};

export default function SearchBar({ label }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearchInputChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${query}/1`);
  };

  return (
    <form onSubmit={handleSearchSubmit} className='relative'>
      <VisuallyHidden.Root>
        <Label htmlFor="search">{label}</Label>
      </VisuallyHidden.Root>
      <Input
        type="search"
        id="search"
        value={query}
        placeholder={label}
        onChange={handleSearchInputChanges}
        className='transparent'
      />
      <Button size={'icon'} className='absolute top-0 right-1 bg-transparent '>
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
}
