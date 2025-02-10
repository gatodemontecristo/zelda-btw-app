import clsx from 'clsx';
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
  shadowSize = 'md',
  color = 'black',
}: MainBackgroundProps) => {
  const getShadowSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'h-1/4';
      case 'md':
        return 'h-1/3';
      case 'lg':
        return 'h-1/3';
      default:
        return 'h-full';
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
    <div className=" overflow-x-hidden left-0 top-0 h-screen w-screen  flex flex-col items-center justify-center  ">
      <img
        className="absolute inset-0 object-cover w-full h-full z-0 "
        src={getImage(image)}
        alt="Background"
      />
      <div className="relative z-10 flex flex-col items-center">{children}</div>
      <div
        className={clsx(
          `absolute bottom-0 left-0 w-full  bg-gradient-to-t  to-transparent  py-4 z-5`,
          getShadowSize(shadowSize),
          'from-' + color, // This is the shadow size
        )}
      ></div>
    </div>
  );
};
