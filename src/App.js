import './App.css';
import './styles/main.scss'

import ThemeContainer from './components/ThemeContainer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex position="relative">
      <ThemeContainer>
        <Navbar />
        <Hero />
      </ThemeContainer>
    </Flex>
  );
}

export default App;
