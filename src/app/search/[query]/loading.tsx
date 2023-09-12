import { Skeleton } from '@/components/ui/skeleton';

// Todo Create reusable card skeleton
export default function Loading() {
  return (
    <div className="px-4 py-3 md:container md:mx-auto min-h-[400px]">
      <div className="grid grid-cols-4 gap-20 ">
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
