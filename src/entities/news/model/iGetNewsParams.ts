export interface iGetNewsParams {
  page?: number;
  title?: string;
  author?: string;
  user_id?: number;
  published_date?: string;
  date_gt?: string;
  date_lt?: string;
  ordering?: string;
}
