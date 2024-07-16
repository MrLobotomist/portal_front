export interface iGetNewsParams {
  page?: number;
  page_size?: number;
  title?: string;
  author?: string;
  user_id?: number;
  date_gt?: string;
  date_lt?: string;
  ordering?: string;
}
