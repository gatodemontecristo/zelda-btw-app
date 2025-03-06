import { ReactElement } from 'react';

export interface MainBackgroundProps {
  /**
   * Image from the gallery
   */
  image?: 'version1' | 'version2' | 'version3';
  /**
   * Children div container
   */
  children?: ReactElement | ReactElement[];
  /**
   * Shadow size
   */
  shadowSize?: 'sm' | 'md' | 'lg' | 'full';
  /**
   * Color gradient
   */
  color?: string;
}
export const MainBackground = ({
  image = 'version1',
  children,
  shadowSize = 'full',
  color = '#59dbfe',
}: MainBackgroundProps) => {
  const getShadowSize = (size: string) => {
    switch (size) {
      case 'sm':
        return '20%';
      case 'md':
        return '50%';
      case 'lg':
        return '75%';
      default:
        return '100%';
    }
  };
  const getImage = (image: string) => {
    switch (image) {
      case 'version1':
        return '../background/zelda_botw.webp';
      case 'version2':
        return '../background/zelda_botw_2.jpg';
      default:
        return '../background/zelda_botw_3.jpg';
    }
  };

  return (
    <div className=" overflow-x-hidden left-0 top-0 h-screen w-screen  flex flex-col items-center justify-center ">
      <img
        className="absolute inset-0 object-cover w-full h-full z-0 "
        src={getImage(image)}
        alt="Background"
      />
      <div className="relative z-10 flex flex-col items-center">{children}</div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: getShadowSize(shadowSize),
          background: `linear-gradient(to top, ${color}, transparent)`,
          padding: '1rem',
          zIndex: 5,
        }}
      ></div>
      {/* <div
        className={clsx(
          `absolute bottom-0 left-0 w-full  bg-linear-to-t from-[#ED9000] to-transparent  py-4 z-5 h-full`,
        )}
      ></div> */}
    </div>
  );
};
