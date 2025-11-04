import React, { Suspense } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { aurora2 } from './styles/theme/theme.constants';
import Aurora from './ui/backgrounds/Aurora';
import GradualBlurMemo from './ui/GradualBlur/GradualBlur';
import { CurrentStackENUM } from './blocks/Stack/Stack.type';
import AnimatedContent from './ui/AnimatedContent/AnimatedContent';
import CircularText from './components/CircularText/CircularText';

const About = React.lazy(() => import('./blocks/About/About'));
const Stack = React.lazy(() => import('./blocks/Stack/Stack'));
const WantTo = React.lazy(() => import('./blocks/WantTo/WantTo'));
const MyCard = React.lazy(() => import('./blocks/MyCard/MyCard'));
const Contacts = React.lazy(() => import('./blocks/Contacts/Contacts'));
const Experience = React.lazy(() => import('./blocks/Experience/Experience'));
const MainProject = React.lazy(() => import('./blocks/MainProject/MainProject'));
const LangSwitcher = React.lazy(() => import('./blocks/LangSwitcher/LangSwitcher'));

function App() {
  return (
    <>
      <GlobalStyles />

      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div className='app-content'>
          <Aurora
            blend={0.4}
            speed={1.7}
            amplitude={0.5}
            colorStops={aurora2}
          />

          <Suspense fallback={
            <div className='loader'>
              <CircularText
                onHover="speedUp"
                spinDuration={20}
                text="LOADING*MY*PORTFOLIO*"
              />
            </div>}
          >
            <LangSwitcher />

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
          </Suspense>
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
