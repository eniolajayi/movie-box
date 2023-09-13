'use client';

import { Button } from '@/components/ui/button';
import { ErrorProps } from '@/shared/types';


export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="px-4 py-3 md:container md:mx-auto min-h-[300px] text-center flex gap-8 flex-col justify-center items-center">
      <h2>Something went wrong! {error.message}</h2>
      <p>Ensure you're connected to the internet and refresh the page.</p>
      <Button variant={'secondary'} onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
