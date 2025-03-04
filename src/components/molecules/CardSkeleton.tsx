import clsx from 'clsx';
import { Skeleton } from '../atoms';

export const CardSkeleton = ({ className }: { className: string }) => {
  return (
    <div className={clsx('flex flex-col items-center p-6 gap-5', className)}>
      <Skeleton type="circle" extraClass="md:size-45 size-35"></Skeleton>
      <Skeleton type="rect" extraClass="w-[80%] md:h-10 h-8"></Skeleton>
      <Skeleton type="rect" extraClass="w-[90%] md:h-5 h-4"></Skeleton>
      <Skeleton type="circle" extraClass="w-[40%] md:h-10 h-8"></Skeleton>
    </div>
  );
};
