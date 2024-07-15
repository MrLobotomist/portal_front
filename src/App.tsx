import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/ui/home.tsx';
import '@/shared/styles/main.module.sass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
