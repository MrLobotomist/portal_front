export interface iPagination {
  page: number;
  pageSize: number;
  total: number | null;
  paginationUpdate: boolean;
}
