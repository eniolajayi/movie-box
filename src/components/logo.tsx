import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../assets/logo.png';

export default function Logo() {
  return (
    <Link href={'/'} className="flex items-center gap-6 w-32 h-12 ">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
        <Image
          className=""
          src={logoImg}
          width={512}
          height={512}
          alt="MovieBox Logo"
          priority
        />
      </div>
      <span className=" font-bold text-2xl leading-none">MovieBox</span>
    </Link>
  );
}
