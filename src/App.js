import './App.css';
import Icon from './assets/components/Icon';
import IconContainer from './assets/components/IconContainer';
import ImgDecoration from './assets/components/ImgDecoration';
import Logo from './assets/components/Logo';
import MainImg from './assets/components/MainImg';
import PodRequest from './assets/components/PodRequest';
import SubmitBox from './assets/components/SubmitBox';
import TextPresentation from './assets/components/TextPresentation';

function App() {
  return (
    <div className="App">
      <PodRequest>
        <Logo/>
        <TextPresentation/>
        <IconContainer>
          <Icon/>
          <Icon/>
          <Icon/>
          <Icon/>
        </IconContainer>
        <SubmitBox/>
        <MainImg/>
        <ImgDecoration/>
      </PodRequest>
    </div>
  );
}

export default App;
