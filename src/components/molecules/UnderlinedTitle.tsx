import clsx from 'clsx';
import {
  SeparatorLine,
  SeparatorLineProps,
  SubTitle,
  SubTitleProps,
} from '../atoms';

export interface UnderlinedTitleProps {
  children: React.ReactNode;
  className?: string;
}
const UnderlinedTitle = ({ children, className }: UnderlinedTitleProps) => {
  return (
    <div
      className={clsx('flex flex-col text-center justify-center', className)}
    >
      {children}
    </div>
  );
};
const Title = ({ ...props }: SubTitleProps) => {
  return <SubTitle {...props}></SubTitle>;
};
const Separator = ({ ...props }: SeparatorLineProps) => {
  return <SeparatorLine {...props}></SeparatorLine>;
};
UnderlinedTitle.Title = Title;
UnderlinedTitle.Separator = Separator;

export default UnderlinedTitle;
