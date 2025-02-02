import { TailwindFontSize } from '../../../helpers';

interface SubTitleProps {
  /**
   * Label subtitle
   */
  label: string;
  /**
   * Size subtitle
   */
  size: TailwindFontSize;
}

export const SubTitle = ({ label, size }: SubTitleProps) => {
  return <p className={`${size} font-hyllian text-zelda-water`}>{label}</p>;
};
