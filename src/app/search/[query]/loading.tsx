import { Skeleton } from '@/components/ui/skeleton';

// Todo Create reusable card skeleton
export default function Loading() {
  return (
    <div className="px-4 py-3 md:container md:mx-auto min-h-[400px]">
      <div className="grid lg:gap-20 md:gap-5 xs:gap-9 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
        <Skeleton className="h-[370px] w-[250px]" />
      </div>
    </div>
  );
}
