import clsx from 'clsx';
import { Skeleton } from '../atoms';

export const CardSkeleton = ({ className }: { className: string }) => {
  return (
    <div className={clsx('flex flex-col items-center p-6 gap-5', className)}>
      <Skeleton type="circle" extraClass="size-45"></Skeleton>
      <Skeleton type="rect" extraClass="w-[80%] h-10"></Skeleton>
      <Skeleton type="rect" extraClass="w-[90%] h-5"></Skeleton>
      <Skeleton type="circle" extraClass="w-[40%] h-10"></Skeleton>
    </div>
  );
};
