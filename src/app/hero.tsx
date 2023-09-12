import { Button } from '@/components/ui/button';
import imdbIcon from '../assets/imdb-icon.png';
import rottenTomatoesIcon from '../assets/rotten-tomatoes-icon.png';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.webp';

export default function HeroSection() {
  return (
    <div style={{ backgroundImage: `url(${heroBg.src})` }} className=' bg-no-repeat bg-cover'>
      <div className="container px-4 py-3 md:container md:mx-auto mb-3">
        <div className="w-full h-[600px] flex items-center ">
          <div className="w-[400px] flex flex-col gap-4 items-start text-gray-50">
            <h1 className=" text-5xl font-bold leading-snug">
              John Wick 3 : <br className='xs:hidden'/> Parabellum
            </h1>
            <div className="w-full flex gap-6">
              <div className="flex gap-2">
                <Image src={imdbIcon} width={35} height={17} alt="" />
                <small className="">86.0 / 100</small>
              </div>
              <div className="flex gap-2">
                <Image src={rottenTomatoesIcon} width={16} height={17} alt="" />
                <small className="">97%</small>
              </div>
            </div>
            <p className="font-medium text-sm w-5/6">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <Button variant={'primary'} size={'lg'} className="uppercase">
              <PlayCircle className="mr-2 h-4 w-4" />{' '}
              <span className="text-sm font-bold">watch trailer</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
