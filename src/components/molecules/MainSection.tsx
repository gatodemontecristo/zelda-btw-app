import {
  BordeLogo,
  BordeLogoProps,
  MainBackground,
  MainBackgroundProps,
  SeparatorLine,
  SeparatorLineProps,
  SubTitle,
  SubTitleProps,
} from '../atoms';

const MainSection = ({ children, ...props }: MainBackgroundProps) => {
  return <MainBackground {...props}>{children}</MainBackground>;
};

const Logo = ({ ...props }: BordeLogoProps) => {
  return <BordeLogo {...props}></BordeLogo>;
};
const Title = ({ ...props }: SubTitleProps) => {
  return <SubTitle {...props}></SubTitle>;
};
const Separator = ({ ...props }: SeparatorLineProps) => {
  return <SeparatorLine {...props}></SeparatorLine>;
};
MainSection.Logo = Logo;
MainSection.Title = Title;
MainSection.Separator = Separator;

export default MainSection;
