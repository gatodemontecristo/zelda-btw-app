import clsx from 'clsx';
import { BasicButton, BasicButtonProps, SeparatorLine } from '../atoms';
import { ReactElement } from 'react';
import { nanoid } from 'nanoid';
interface FooterZeldaProps {
  className?: string;
  author: string;
  location: string;
  button?: ReactElement;
  social?: ReactElement;
}

export const FooterZelda = ({ button, social, ...props }: FooterZeldaProps) => {
  return (
    <div
      className={clsx(
        props.className,
        'flex flex-col py-15 items-center justify-center bg-black w-full',
      )}
    >
      {button}
      <p className="font-bold text-2xl text-zelda-sand">{props.author}</p>
      <p className="font-light text-base text-gray-400">{props.location}</p>
      {social}
    </div>
  );
};

const Button = ({ ...props }: BasicButtonProps) => {
  return <BasicButton {...props}></BasicButton>;
};

interface SocialSectionItemProps {
  link: string;
  name?: string;
  isDefault?: boolean;
}
interface SocialSectionProps {
  social: SocialSectionItemProps[];
  website: SocialSectionItemProps[];
}
const SocialItem = ({
  isDefault = false,
  ...props
}: SocialSectionItemProps) => {
  return (
    <a target="_blank" href={props.link} data-testid="social-item">
      <div className="flex flex-row items-center justify-start gap-2">
        <img
          className="size-5 filter invert"
          src={`../social/${isDefault ? 'nintendo-switch' : props.name}.svg`}
          alt=""
        />
        <p className="font-light text-base text-zelda-sand first-letter:uppercase">
          {props.name}
        </p>
      </div>
    </a>
  );
};
const Social = ({ ...props }: SocialSectionProps) => {
  return (
    <div className="flex  md:flex-row flex-col space-x-4 gap-3 md:items-start items-center justify-center">
      <div className="flex flex-col gap-2 items-start">
        <p className="font-normal text-xl text-zelda-sand mb-2">Social :</p>
        {props.social.map((item) => {
          return <SocialItem {...item} key={nanoid()}></SocialItem>;
        })}
      </div>

      <SeparatorLine
        version="version02"
        width={60}
        className="flex md:hidden"
      ></SeparatorLine>
      <div className=" flex-col md:flex hidden">
        <p className="text-white text-6xl font-light">|</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <p className="font-normal text-xl text-zelda-sand mb-2">Websites :</p>
        {props.website.map((item) => {
          return <SocialItem {...item} key={nanoid()}></SocialItem>;
        })}
      </div>
    </div>
  );
};
FooterZelda.Button = Button;

FooterZelda.Social = Social;
