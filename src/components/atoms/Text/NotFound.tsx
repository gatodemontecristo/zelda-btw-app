import clsx from 'clsx';
interface NotFoundProps {
  imgUrl: string;
  size?: number;
  classNameTitle?: string;
}
export const NotFound = ({ size, imgUrl, classNameTitle }: NotFoundProps) => {
  return (
    <div
      className={clsx('flex flex-col w-full justify-center items-center  py-8')}
    >
      <img
        className={clsx(' z-10')}
        style={{
          width: size + '%',
        }}
        src={imgUrl}
        alt="notFound"
      />
      <p className={clsx('font-hyllian text-zelda-history ', classNameTitle)}>
        Not Found Link 404
      </p>
    </div>
  );
};
