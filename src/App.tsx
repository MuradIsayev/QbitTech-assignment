import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen p-4 overflow-hidden overflow-y-scroll">
        <div className="main-container ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
