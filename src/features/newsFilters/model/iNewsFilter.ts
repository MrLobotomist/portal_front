export interface iNewsFilter {
  title?: string | null;
  date_gt?: string | null;
  date_lt?: string | null;
  author?: string | null;
  user_id?: number | null;
  filtersUpdate?: boolean | null;
}
