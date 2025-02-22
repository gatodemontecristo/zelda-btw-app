import { Outlet } from 'react-router-dom';
import { FooterZelda } from '../../components';
import MainSection from '../../components/molecules/MainSection';
export const ZeldaRoutes = () => {
  return (
    <div className="flex flex-col  gap-10 bg-zelda-purple overflow-x-hidden">
      <MainSection shadowSize="full" color="zelda-purple">
        <MainSection.Logo
          imgUrl="../logo_botw.png"
          size={40}
        ></MainSection.Logo>
        <MainSection.Title
          label="Hyrule Compendium (BTW)"
          size="text-5xl"
          className="mt-4"
        ></MainSection.Title>
        <MainSection.Separator width={40}></MainSection.Separator>
      </MainSection>
      <Outlet></Outlet>
      <FooterZelda
        className="mt-10 gap-2"
        author={'Erick Dejo Vicente'}
        location={'Lima, Perú (2025)'}
      >
        <FooterZelda.Button
          imgButton="./icons/github.png"
          className="bg-zelda-hill p-5 hover:bg-black!"
        ></FooterZelda.Button>
      </FooterZelda>
    </div>
  );
};
