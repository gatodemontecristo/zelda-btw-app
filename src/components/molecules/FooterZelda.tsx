import clsx from 'clsx';
import { BasicButton, BasicButtonProps } from '../atoms';
import { ReactElement } from 'react';

interface FooterZeldaProps {
  className?: string;
  author: string;
  location: string;
  children?: ReactElement | ReactElement[];
}

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
