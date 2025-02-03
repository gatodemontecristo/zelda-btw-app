import './App.css';
import { BasicButton, BordeLogo, MainBackground, SubTitle } from './components';

function App() {
  return (
    <>
      <MainBackground>
        <h1 className="text-6xl text-white font-bold">Hello World</h1>
        <p className="text-white">This is a background image</p>
      </MainBackground>
      <BasicButton label="Basic button"></BasicButton>
      <SubTitle label="Zelda" size="text-8xl"></SubTitle>
      <BordeLogo imgUrl="../logo_botw.png"></BordeLogo>
    </>
  );
}

export default App;
