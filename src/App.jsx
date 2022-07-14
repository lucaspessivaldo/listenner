import HomePage from './components/homePage/HomePage.jsx';
import Header from './components/header/Header.jsx';
import NumberPage from './components/numberPage/NumberPage.jsx'
import AlphabetPage from './components/alphabetPage/AlphabetPage.jsx'
import MinimalPairsPage from './components/minimalPairsPage/MinimalPairsPage.jsx';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/number' element={<NumberPage />} />
        <Route path='/alphabet' element={<AlphabetPage />} />
        <Route path='/minimal-pairs' element={<MinimalPairsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App