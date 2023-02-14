import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuccessStory from './Success Stories/SuccessStory';
import SuccessPage from './Success Stories/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/success-story' element={<SuccessPage/>}/>
        <Route path='*' element={'Error 404: Page Not Found'}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
