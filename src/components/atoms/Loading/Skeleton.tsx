interface SkeletonProps {
  type: 'circle' | 'rect';
  extraClass: string;
}

export const Skeleton = ({ type, extraClass }: SkeletonProps) => {
  const baseClasses = 'bg-zelda-rock animate-pulse';

  if (type === 'circle') {
    return (
      <div
        data-testid="skeleton"
        className={`${baseClasses} rounded-full ${extraClass}`}
      ></div>
    );
  }

  return (
    <div
      data-testid="skeleton"
      className={`${baseClasses} rounded ${extraClass}`}
    ></div>
  );
};
