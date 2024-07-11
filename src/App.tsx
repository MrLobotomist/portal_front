import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useGetPostsQuery } from './shared/api/api';
import Home from '@/pages/home/ui/home.tsx';
function App() {
  // Replace 1 with the resource ID you want to fetch
  const { data, isLoading } = useGetPostsQuery();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   {isLoading == false ? <p>{data.toString()}</p> : null}
    //   {/* Render your component based on the API data and loading/error states */}
    // </div>
  );
}
export default App;
