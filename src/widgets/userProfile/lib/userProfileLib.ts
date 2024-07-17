import { iUserProfile } from '@/entities/user/model/iUser.ts';
import { iTempUser } from '@/entities/user/model/iTempUser.ts';

export function ReturnWithoutImage(
  profile: iUserProfile | iTempUser | undefined,
): Partial<iUserProfile> {
  if (profile != null) {
    const profilePart: Partial<iUserProfile> = {};
    for (const [key, value] of Object.entries(profile)) {
      if (!key.startsWith('image')) {
        profilePart[key as keyof iUserProfile] = value;
      }
    }
    return profilePart;
  } else return {};
}
