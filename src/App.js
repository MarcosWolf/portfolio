import Header from './components/Header';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Arts from './components/Arts';
import Graduation from './components/Graduation';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Arts />
      <Graduation />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
