import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HouseDetails from './pages/HouseDetails';
import Header from './components/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen p-4 overflow-hidden overflow-y-scroll">
        <Header />
        <div className="main-container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/house" element={<Home />} />
            <Route path="/house/:id" element={<HouseDetails />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
