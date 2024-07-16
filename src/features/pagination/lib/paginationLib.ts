import pagin from '@/features/pagination/ui/pagination.module.sass';

export class PaginationLib {
  public static getPageNumbers(page: number, totalPage: number) {
    const pageNumbers: number[] = [];
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPage, page + 2);
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  public static getClassButton(
    currentLink: number,
    page: number,
    totalPage: number,
    position: 'start' | 'end' | 'next' | 'prev' | 'item',
  ) {
    if (page == 1 && position == 'start')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (currentLink < 1 && position == 'prev')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (currentLink > totalPage && position == 'next')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (page == totalPage && position == 'end')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (currentLink == page) return `${pagin.paginator_item} ${pagin.active}`;
    return `${pagin.paginator_item}`;
  }

  public static isNotDisabled(
    currentLink: number,
    page: number,
    totalPage: number,
    position: 'start' | 'end' | 'next' | 'prev' | 'item',
  ) {
    return !(
      (page == 1 && position == 'start') ||
      (currentLink < 1 && position == 'prev') ||
      (currentLink > totalPage && position == 'next') ||
      (page == totalPage && position == 'end') ||
      currentLink == page
    );
  }
}
