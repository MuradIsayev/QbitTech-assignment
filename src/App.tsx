import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden overflow-y-scroll p-4">
        <div className="main-container ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
