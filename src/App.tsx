import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/ui/home.tsx';
import '@/shared/styles/main.module.sass';
import { Profile } from '@/pages/profile/ui/profile.tsx';
import { Users } from '@/pages/users/ui/users.tsx';
import { useGetUserQuery } from '@/entities/user/api/user.ts';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store.ts';
import Page403 from '@/pages/403/ui/403.tsx';
import Page404 from '@/pages/404/ui/404.tsx';

function App() {
  useGetUserQuery();
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/users"
          element={
            user?.groups.includes('portal_admin') ? <Users /> : <Page403 />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
