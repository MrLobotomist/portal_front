// Тип для UserProfile
export interface iUserProfile {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  position: string | null;
  company: string | null;
  phone_number: string | null;
  biography: string | null;
  date_of_birth: string;
  image: string | null;
  user: number;
}

// Тип для User (из Django contrib.auth)
export interface iUser {
  id: number;
  username: string;
  email: string;
  groups: string[];
  profile: iUserProfile;
}
