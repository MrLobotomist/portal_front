import pagin from '@/widgets/pagination/ui/pagination.module.sass';
import grid from '@/shared/styles/grid.module.sass';

export const Paginator = () => {
  return (
    <>
      <div className={`${grid.container}`}>
        <div className={`${grid.row}`}>
          <div className={`${grid.col_6}`} style={{ justifyContent: 'center' }}>
            <ul className={pagin.paginator}>
              <li className={`${pagin.paginator_item} ${pagin.disabled}`}>
                <span className={pagin.paginator_link}>В начало</span>
              </li>
              <li className={`${pagin.paginator_item} ${pagin.disabled}`}>
                <span className={pagin.paginator_link}>{'<'}</span>
              </li>
              <li className={`${pagin.paginator_item} ${pagin.active}`}>
                <span className={pagin.paginator_link}>1</span>
              </li>
              <li className={`${pagin.paginator_item}`}>
                <span className={pagin.paginator_link}>2</span>
              </li>
              <li className={`${pagin.paginator_item}`}>
                <span className={pagin.paginator_link}>3</span>
              </li>
              <li className={`${pagin.paginator_item}`}>
                <span className={pagin.paginator_link}>{'>'}</span>
              </li>
              <li className={`${pagin.paginator_item}`}>
                <span className={pagin.paginator_link}>В конец</span>
              </li>
            </ul>
          </div>
          <div className={`${grid.col_6}`} style={{ justifyContent: 'center' }}>
            <p className={pagin.paginator_title}>На странице:</p>
            <ul className={pagin.paginator}>
              <li className={`${pagin.paginator_item} ${pagin.active}`}>
                <span className={pagin.paginator_link}>5</span>
              </li>
              <li className={`${pagin.paginator_item}`}>
                <span className={pagin.paginator_link}>10</span>
              </li>
              <li className={`${pagin.paginator_item}`}>
                <span className={pagin.paginator_link}>15</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
