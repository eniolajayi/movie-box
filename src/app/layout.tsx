import SearchBar from '@/components/search-bar';
import './globals.css';
import type { Metadata } from 'next';
import Logo from '@/components/logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Equal, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { dmSans } from '@/styles/fonts';
import tmdbLogo from '@/assets/tmdb-logo-long-blue.svg';

export const metadata: Metadata = {
  title: 'MovieBox',
  description:
    'a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. Data is provided by the TMDB API. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={dmSans.style}>
      <body className=' text-gray-950 leading-normal'>
        <header className=' px-4 py-3 md:container md:mx-auto '>
          <nav className=' md:grid md:items-center md:gap-3 flex flex-col justify-stretch gap-5 md:justify-between md:grid-cols-[1fr_2fr_1fr]'>
            <Logo />
            <SearchBar  label="What do you want to watch?" />
            <div className="md:flex hidden items-center justify-end gap-4">
              <Link href={'/'} className='font-bold text-base'>Sign In</Link>
              <Button
                size={'icon'}
                variant={'primary'}
                className="rounded-full"
              >
                <Equal />
              </Button>
            </div>
          </nav>
        </header>
        {children}
        <footer className='px-4  py-3 mb-9 h-96 mt-3 md:container md:mx-auto flex items-center justify-center'>
          <div className='text-lg leading-tight font-bold w-[496px]'>
            <div className='flex justify-evenly items-center'>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YoutubeIcon />
            </div>
            <div className='flex flex-wrap justify-between items-center my-9'>
              <Link className='' href={"/"}>Condition of Use</Link>
              <Link href={"/"}>Privacy & Policy</Link>
              <Link href={"/"}>Press Room</Link>
            </div>
            <p className=' text-center text-gray-500 '>© 2021 MovieBox by Eniola Ajayi. All data or images used are provied by <Link href={'https://www.themoviedb.org/'}>themoviedb.org</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
