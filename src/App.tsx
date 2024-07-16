import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/ui/home.tsx';
import '@/shared/styles/main.module.sass';
import { Profile } from '@/pages/profile/ui/profile.tsx';
import { Users } from '@/pages/users/ui/users.tsx';
import { useGetUserQuery } from '@/entities/user/api/user.ts';

function App() {
  useGetUserQuery();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
