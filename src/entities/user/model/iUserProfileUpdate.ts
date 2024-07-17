export interface iUserProfileUpdate {
  id?: number;
  name?: string;
  surname?: string;
  patronymic?: string;
  position?: string | null;
  company?: string | null;
  phone_number?: string | null;
  biography?: string | null;
  date_of_birth?: string;
  image?: FormData | null;
  user?: number;
}
