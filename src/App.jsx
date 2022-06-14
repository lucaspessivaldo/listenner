import HomePage from './components/homePage/HomePage.jsx';
import Header from './components/header/Header.jsx';
import DisplayQuestion from './components/displayQuestion/DisplayQuestion.jsx'
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
        <Route path='/number' element={<DisplayQuestion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
