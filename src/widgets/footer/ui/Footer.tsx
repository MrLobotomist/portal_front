import React from 'react';
import styles from './footer.module.sass';
import grid from '@/shared/styles/grid.module.sass';

export const Footer: React.FC = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${grid.container}`}>
        <div className={grid.row}>
          <div className={grid.col_1} />
          <div className={grid.col_4}>
            <h4>Обо мне</h4>
          </div>
          <div className={grid.col_3}>
            <h4>Контакты</h4>
          </div>
          <div className={grid.col_3}>
            <h4>Соцсети</h4>
          </div>
          <div className={grid.col_1} />

          <div className={grid.col_1} />
          <div className={grid.col_4}>
            <p>
              Я fullstack dev на предприятии тяжелого машиностроения. Опыт
              работы - 2 года.
            </p>
          </div>
          <div className={grid.col_3}>
            <ul>
              <li>Email: smehovpavel@gmail.com</li>
              <li>Phone: +7 (950) 542-44-98</li>
            </ul>
          </div>
          <div className={grid.col_3}>
            <ul className={styles.socials}>
              <li>
                <a href="https://t.me/PavelSmekhov196">Telegram</a>
              </li>
            </ul>
          </div>
          <div className={grid.col_1} />
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 Pavel Smekhov. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
