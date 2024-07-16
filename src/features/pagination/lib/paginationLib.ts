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

  public static getClassNumber(currentNumber: number, page: number) {
    if (currentNumber != page) return `${pagin.paginator_item}`;
    else return `${pagin.paginator_item} ${pagin.active}`;
  }

  public static getClassButton(
    currentLink: number,
    page: number,
    total: number,
    position: 'start' | 'end' | 'next' | 'prev' | 'item',
  ) {
    if (page == 1 && position == 'start')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (currentLink < 1 && position == 'prev')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (currentLink > total && position == 'next')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (page == total && position == 'end')
      return `${pagin.paginator_item} ${pagin.disabled}`;
    if (currentLink == page) return `${pagin.paginator_item} ${pagin.active}`;
    return `${pagin.paginator_item}`;
  }
}
