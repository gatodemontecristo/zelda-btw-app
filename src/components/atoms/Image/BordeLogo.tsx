import clsx from 'clsx';

export interface BordeLogoProps {
  /**
   * Url image
   */
  imgUrl: string;
  /**
   * Size image porcent
   */
  size?: number;
}
export const BordeLogo = ({ imgUrl, size = 40 }: BordeLogoProps) => {
  return (
    <div
      className={clsx(
        'flex flex-row md:w-[70%] w-[100%] justify-center items-center relative py-8',
      )}
    >
      <div
        className="absolute inset-0 border-t-8 border-b-8 border-amber-300 gradient-border

       
        bg-gradient-to-r from-transparent via-gray-600/70 to-transparent "
      ></div>
      <img
        className={clsx('relative z-10')}
        style={{
          width: size + '%',
        }}
        src={imgUrl}
        alt="Logo"
      />
    </div>
  );
};
