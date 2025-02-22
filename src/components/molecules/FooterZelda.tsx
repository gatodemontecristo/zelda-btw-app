import clsx from 'clsx';
import { BasicButton, BasicButtonProps } from '../atoms';
import { ReactElement } from 'react';

interface FooterZeldaProps {
  className?: string;
  author: string;
  location: string;
  children?: ReactElement | ReactElement[];
}
// export const FooterZelda = ({
//   className,
//   author,
//   location,
// }: FooterZeldaProps) => {
//   return (
//     <div
//       className={clsx(
//         className,
//         'flex flex-col py-10 items-center justify-center bg-black w-full',
//       )}
//     >
//       <BasicButton
//         imgButton="./icons/github.png"
//         className="bg-zelda-hill p-5 hover:bg-black!"
//       ></BasicButton>
//       <p className="font-bold text-2xl text-zelda-sand">{author}</p>
//       <p className="font-light text-base text-gray-400">{location}</p>
//     </div>
//   );
// };

export const FooterZelda = ({ children, ...props }: FooterZeldaProps) => {
  return (
    <div
      className={clsx(
        props.className,
        'flex flex-col py-10 items-center justify-center bg-black w-full',
      )}
    >
      {children}
      <p className="font-bold text-2xl text-zelda-sand">{props.author}</p>
      <p className="font-light text-base text-gray-400">{props.location}</p>
    </div>
  );
};

const Button = ({ ...props }: BasicButtonProps) => {
  return <BasicButton {...props}></BasicButton>;
};

FooterZelda.Button = Button;
