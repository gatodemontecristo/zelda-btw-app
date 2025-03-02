// filepath: /Users/pc/Documents/Proyectos REACT (2025)/project_zelda_btw/project-zelda-btw/src/components/Pagination.tsx
import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  onNext: () => void;
  onPrev: () => void;
  onJump: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  maxPage,
  onNext,
  onPrev,
  onJump,
}) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={onPrev}
        className={clsx(
          'p-3  rounded-full border mr-5',
          currentPage === 1
            ? 'bg-gray-800 cursor-not-allowed border-gray-500 '
            : 'bg-zelda-green text-white border-zelda-history ',
        )}
        disabled={currentPage === 1}
      >
        <img
          src={`../arrow/arrow-left-${currentPage === 1 ? 'white' : 'color'}.png`}
          className="size-[20px]"
        ></img>
      </button>
      {[...Array(maxPage)].map((_, index) => (
        <button
          key={nanoid()}
          onClick={() => onJump(index + 1)}
          className={clsx(
            'px-4 py-2  rounded-full',
            currentPage === index + 1
              ? 'bg-zelda-history text-white'
              : 'bg-white text-black',
          )}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={onNext}
        className={clsx(
          'p-3  rounded-full border  ml-5 ',
          currentPage === maxPage
            ? 'bg-gray-800 cursor-not-allowed border-gray-500 '
            : 'bg-zelda-green text-white border-zelda-history',
        )}
        disabled={currentPage === maxPage}
      >
        <img
          src={`../arrow/arrow-left-${currentPage === maxPage ? 'white' : 'color'}.png`}
          className="size-[20px] transform -scale-x-100"
        ></img>
      </button>
    </div>
  );
};
