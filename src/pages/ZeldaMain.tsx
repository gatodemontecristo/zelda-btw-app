import MainSection from '../components/molecules/MainSection';

export const ZeldaMain = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-zelda-purple">
      <MainSection shadowSize="full">
        <MainSection.Logo
          imgUrl="../logo_botw.png"
          size={30}
        ></MainSection.Logo>
        <MainSection.Title
          label="Encliclopedia"
          size="text-7xl"
        ></MainSection.Title>
        <MainSection.Separator width={30}></MainSection.Separator>
      </MainSection>
      {/* <MainBackground>
        <h1 className="text-6xl text-white font-bold">Hello World</h1>
        <p className="text-white">This is a background image</p>
        <SeparatorLine></SeparatorLine>
      </MainBackground>
      <BasicButton label="Basic button"></BasicButton>
      <SubTitle label="Zelda" size="text-8xl"></SubTitle>
      <BordeLogo imgUrl="../logo_botw.png"></BordeLogo>
      <Paragraph>
        <p>
          Embark on a reimagined adventure through Hyrule with our fresh Ul
          redesign for The Legend of Zelda: Breath of the Wild. Seamlessly
          blending classic aesthetics with modern functionality, our alternative
          Ul options fix existing issues and breathe new life into the gameplay
          experience.
        </p>
        <p>
          Navigate menus effortlessly and manage your inventory with intuitive
          ease. We've optimized every detail to minimize distractions and
          maximize immersion, ensuring that every moment in the game feels as
          legendary as the hero's journey.
        </p>
        <p>
          Rediscover the magic of Hyrule with a Ul that honors the past while
          embracing innovation. The redesigned interface for The Legend of
          Zelda: Breath of the Wild awaits to elevate your gaming adventure to
          new heights.
        </p>
      </Paragraph> */}
    </div>
  );
};
