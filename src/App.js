import { Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './home/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
