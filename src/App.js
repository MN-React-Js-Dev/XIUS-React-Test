import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LetsTalkPage from './Pages/LetsTalkPage';
import './App.css';
import RequestRecivePage from './Pages/RequestRecivePage';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/lets-talk' element={<LetsTalkPage />}></Route>
          <Route exact path='/reuest' element={<RequestRecivePage />}></Route>
          <Route exact path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
