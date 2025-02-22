import UnderlinedTitle from './UnderlinedTitle';
import { BasicButton } from '../atoms/Button/BasicButton';
import { BOTWCompendiumProps } from '../../helpers';
import clsx from 'clsx';

export const CardResource = ({
  resource,
  className = '',
}: {
  resource: BOTWCompendiumProps;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center  bg-repeat p-5 border border-zelda-history rounded-lg',
        resource.dlc
          ? 'bg-[url(../frame/pattern-white-tri.jpg)]'
          : 'bg-[url(../frame/pattern-blk-diamond.jpg)]',
        className,
      )}
    >
      <div className="relative flex flex-row items-center justify-center p-2 bg-[url(../frame/gameplay-frame.png)]  bg-no-repeat bg-cover bg-center w-[200px] h-[200px]">
        <img
          src={resource.image}
          className="size-[180px] rounded-full"
          alt=""
        />
      </div>
      <UnderlinedTitle>
        <UnderlinedTitle.Title
          label={resource.name}
          secondaryTitle={resource.id.toString()}
          size="text-base"
          className="mt-4"
        ></UnderlinedTitle.Title>
        <UnderlinedTitle.Separator
          width={40}
          version="version01"
        ></UnderlinedTitle.Separator>
      </UnderlinedTitle>
      <div
        className={clsx(
          'text-sm font-medium text-center',
          resource.dlc ? 'text-black' : 'text-white',
        )}
      >
        {resource.common_locations
          ? resource.common_locations.join(', ')
          : '-No data-'}
      </div>
      <BasicButton
        imgButton="./icons/eye.png"
        className="bg-zelda-history px-4 py-2  hover:bg-black!"
      ></BasicButton>
    </div>
  );
};
