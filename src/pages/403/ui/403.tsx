import React from 'react';
import page403 from '@/pages/403/ui/403.module.sass';

const Page403: React.FC = () => {
  return (
    <div className={page403.page403}>
      <h1>403</h1>
      <p>У вас нет прав для просмотра этой страницы.</p>
      <a href="/">На главную</a>
    </div>
  );
};

export default Page403;
