import { Outlet } from 'react-router-dom';
import { FooterZelda } from '../../components';
import MainSection from '../../components/molecules/MainSection';
import { useMediaQuery } from 'react-responsive';
export const ZeldaRoutes = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const onNavigateGithub = () => {
    window.open('https://github.com/gatodemontecristo/zelda-btw-app', '_blank');
  };
  const logoSize = isMobile ? 60 : 40;
  const textSize = isMobile ? 'text-2xl' : 'text-5xl';
  const separatorSize = isMobile ? 70 : 40;

  return (
    <div className="flex flex-col  gap-10 bg-zelda-purple overflow-x-hidden">
      <MainSection shadowSize="full" color="#121424">
        <MainSection.Logo
          imgUrl="../logo_botw.png"
          size={logoSize}
        ></MainSection.Logo>
        <MainSection.Title
          label="Hyrule Compendium (BTW)"
          size={textSize}
          className="mt-4"
        ></MainSection.Title>
        <MainSection.Separator width={separatorSize}></MainSection.Separator>
      </MainSection>
      <Outlet></Outlet>
      <FooterZelda
        className="mt-10 gap-2"
        author={'Erick Dejo Vicente'}
        location={'Lima, Perú (2025)'}
      >
        <FooterZelda.Button
          imgButton="../icons/github.png"
          className="bg-zelda-hill p-5 hover:bg-black! "
          classButton="size-15"
          fnClickButton={onNavigateGithub}
        ></FooterZelda.Button>
      </FooterZelda>
    </div>
  );
};
