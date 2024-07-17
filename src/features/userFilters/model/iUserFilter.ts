export interface iUserFilter {
  id?: number | null;
  surname?: string | null;
  name?: string | null;
  patronymic?: string | null;
  email?: string | null;
  date_of_birth?: string | null;
  groups?: string | null;
  userFilterUpdate?: boolean;
}
