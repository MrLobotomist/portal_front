// Тип для UserProfile
interface TempUserProfile {
  id?: number;
  name?: string;
  surname?: string;
  patronymic?: string;
  position?: string | null;
  company?: string | null;
  phone_number?: string | null;
  biography?: string | null;
  date_of_birth?: string;
  image?: string | null;
  user?: number;
}

// Тип для User (из Django contrib.auth)
export interface iTempUser {
  id?: number;
  username?: string;
  email?: string;
  groups?: string[];
  profile?: TempUserProfile;
}
