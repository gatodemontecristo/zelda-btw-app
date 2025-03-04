import UnderlinedTitle from './UnderlinedTitle';
import { BasicButton } from '../atoms/Button/BasicButton';
import { BOTWCompendiumProps } from '../../helpers';
import clsx from 'clsx';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';

export const CardResource = ({
  resource,
  className = '',
}: {
  resource: BOTWCompendiumProps;
  className?: string;
}) => {
  const navigate = useNavigate();
  const onNavigateDetail = () => {
    navigate(`/detail/${resource.id}`);
  };
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const lineSize = isMobile ? 80 : 40;
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
      <div
        className="relative flex flex-row items-center justify-center p-2 bg-[url(../frame/gameplay-frame.png)]  bg-no-repeat bg-cover bg-center md:w-[200px] md:h-[200px]
      size-[160px]"
      >
        <img
          src={resource.image}
          className="md:size-[180px] size-[140px] rounded-full"
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
          width={lineSize}
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
        fnClickButton={onNavigateDetail}
        classButton="size-7"
      ></BasicButton>
    </div>
  );
};
