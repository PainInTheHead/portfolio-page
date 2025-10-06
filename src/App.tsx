import About from './blocks/About/About';
import MyCard from './blocks/MyCard/MyCard';
import Experience from './blocks/Experience/Experience';
import { GlobalStyles } from './styles/GlobalStyles';
import { aurora2 } from './styles/theme/theme.constants';
import Aurora from './ui/backgrounds/Aurora';
import GradualBlurMemo from './ui/GradualBlur/GradualBlur';
import Stack from './blocks/Stack/Stack';
import { CurrentStackENUM } from './blocks/Stack/Stack.type';
import MainProject from './blocks/MainProject/MainProject';
import WantTo from './blocks/WantTo/WantTo';
import Contacts from './blocks/Contacts/Contacts';
import AnimatedContent from './ui/AnimatedContent/AnimatedContent';

function App() {
  return (
    <>
      {/* <MainLogoLoop /> */}

      <GlobalStyles />

      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div className='app-content'>
          <Aurora
            blend={0.4}
            speed={1.5}
            amplitude={1.0}
            colorStops={aurora2}
          />

          <MyCard />

          <About />

          <Experience/>

          <AnimatedContent>
            <Stack stack={CurrentStackENUM.MAIN_STACK} />
          </AnimatedContent>

          <AnimatedContent reverse>
            <Stack stack={CurrentStackENUM.FAMILIAR_STACK} />
          </AnimatedContent>

          <AnimatedContent triggerOffset={500}>
            <MainProject />
          </AnimatedContent>

          <AnimatedContent reverse>
            <WantTo />
          </AnimatedContent>

          <AnimatedContent>
            <Contacts
              isAll
              title='Contacts'
              style={{ marginTop: 90 }}
            />
          </AnimatedContent>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <GradualBlurMemo
            opacity={1}
            divCount={5}
            strength={2}
            curve="bezier"
            height="6rem"
            target="parent"
            position="bottom"
            exponential={true}
          />
        </div>
      </section>
    </>
  );
}

export default App;
