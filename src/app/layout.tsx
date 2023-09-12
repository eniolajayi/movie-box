import SearchBar from '@/components/search-bar';
import './globals.css';
import type { Metadata } from 'next';
import Logo from '@/components/logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Equal, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { dmSans } from '@/styles/fonts';

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
          <nav className=' grid items-center justify-between grid-cols-[200px_525px_180px]'>
            <Logo />
            <SearchBar label="What do you want to watch?" />
            <div className="flex items-center justify-between">
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
            <div className='flex justify-between items-center my-9'>
              <Link className='' href={"/"}>Condition of Use</Link>
              <Link href={"/"}>Privacy & Policy</Link>
              <Link href={"/"}>Press Room</Link>
            </div>
            <p className=' text-center text-gray-500 '>© 2021 MovieBox by Eniola Ajayi</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
