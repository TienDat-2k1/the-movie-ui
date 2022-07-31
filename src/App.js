import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigate from './router/navigate/Navigate';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />} />
      </Routes>
    </>
  );
}

export default App;
