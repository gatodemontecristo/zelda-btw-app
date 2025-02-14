import UnderlinedTitle from './UnderlinedTitle';
import { BasicButton } from '../atoms/Button/BasicButton';

export const CardResource = () => {
  const common_locations = ['Lanayru Great Spring', 'Hyrule Field'];
  return (
    <div className="flex flex-col w-1/5 gap-2 items-center bg-[url(../frame/pattern-blk-diamond.jpg)] bg-repeat p-5 border border-zelda-history rounded-lg">
      <div className="relative flex flex-row items-center justify-center p-2 bg-[url(../frame/gameplay-frame.png)]  bg-no-repeat bg-cover bg-center w-[200px] h-[200px]">
        <img
          src="../frame/testImage.png"
          className="size-[180px] rounded-full"
          alt=""
        />
      </div>
      <UnderlinedTitle>
        <UnderlinedTitle.Title
          label="Treasure octorok"
          secondaryTitle="0011"
          size="text-base"
          className="mt-4"
        ></UnderlinedTitle.Title>
        <UnderlinedTitle.Separator
          width={40}
          version="version01"
        ></UnderlinedTitle.Separator>
      </UnderlinedTitle>
      <div className="text-sm text-white">{common_locations.join(', ')}</div>
      <BasicButton
        imgButton="./icons/eye.png"
        className="bg-zelda-history hover:bg-black!"
      ></BasicButton>
    </div>
  );
};
