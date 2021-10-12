import './App.css';
import Icon from './assets/components/Icon';
import IconContainer from './assets/components/IconContainer';
import ImgDecoration from './assets/components/ImgDecoration';
import Logo from './assets/components/Logo';
import MainImg from './assets/components/MainImg';
import PodRequest from './assets/components/PodRequest';
import SubmitBox from './assets/components/SubmitBox';
import TextPresentation from './assets/components/TextPresentation';
import logoSpotify from './assets/desktop/spotify.svg'; 
import logoApplePodcast from './assets/desktop/apple-podcast.svg'; 
import logoGooglePodcast from './assets/desktop/google-podcasts.svg'; 
import logoPocketCast from './assets/desktop/pocket-casts.svg'; 


function App() {
  return (
    <div className="App">
      <PodRequest>
        <Logo/>
        <div className="mainContainer" >
        <TextPresentation/>
        <div className="iconAndSubmitBoxContainer" >
          <IconContainer>
            <Icon src={logoSpotify} alt={"logo Spotify"}/>
            <Icon src={logoApplePodcast} alt={"logo Apple Podcast"}/>
            <Icon src={logoGooglePodcast} alt={"logo Google Podcast"}/>
            <Icon src={logoPocketCast} alt={"logo Pockets Cast"}/>
          </IconContainer>
          <SubmitBox/>
        </div>
        </div>
        <MainImg/>
        <ImgDecoration/>
      </PodRequest>
    </div>
  );
}

export default App;
