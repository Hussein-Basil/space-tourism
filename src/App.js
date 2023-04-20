import './App.css';
import './styles/main.scss'

import ThemeContainer from './components/ThemeContainer'
import Navbar from './components/Navbar'


import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

import { Flex } from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Route,
  Routes

} from 'react-router-dom'

function App() {
  return (
    <Flex position="relative">
      <ThemeContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        </Router>
      </ThemeContainer>
    </Flex>
  );
}

export default App;
