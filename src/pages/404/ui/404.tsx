import React from 'react';
import page403 from '@/pages/403/ui/403.module.sass';

const Page404: React.FC = () => {
  return (
    <div className={page403.page403}>
      <h1>404</h1>
      <p>Страницы не существует</p>
      <a href="/">На главную</a>
    </div>
  );
};

export default Page404;
