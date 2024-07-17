import store from '@/app/store/store.ts';
import { setTempUser } from '@/entities/user/model/userSlice.ts';
import { iTempUser } from '@/entities/user/model/iTempUser.ts';

export class UserService {
  public static init() {
    const state = store.getState();
    const user = state.user.user;
    store.dispatch(
      setTempUser({ ...user, profile: { ...user?.profile, image: null } }),
    );
  }

  public static reset() {
    store.dispatch(setTempUser(null));
  }

  private static updateFields = (updatedProps: Partial<iTempUser>) => {
    const state = store.getState();
    const user = state.user.tempUser;
    store.dispatch(
      setTempUser({
        ...user,
        ...updatedProps,
        profile: { ...user?.profile, ...updatedProps.profile },
      }),
    );
  };

  public static setSurname = (surname: string): void => {
    UserService.updateFields({ profile: { surname: surname } });
  };

  public static setName = (name: string): void => {
    UserService.updateFields({ profile: { name: name } });
  };

  public static setPatronymic = (patronymic: string): void => {
    UserService.updateFields({ profile: { patronymic: patronymic } });
  };

  public static setCompany = (company: string): void => {
    UserService.updateFields({ profile: { company: company } });
  };

  public static setPosition = (position: string): void => {
    UserService.updateFields({ profile: { position: position } });
  };

  public static setPhoneNumber = (phone_number: string): void => {
    UserService.updateFields({ profile: { phone_number: phone_number } });
  };

  public static setDateOfBirth = (date_of_birth: string): void => {
    UserService.updateFields({ profile: { date_of_birth: date_of_birth } });
  };

  public static setBiography = (biography: string): void => {
    UserService.updateFields({ profile: { biography: biography } });
  };

  public static setImage = (image: string): void => {
    UserService.updateFields({ profile: { image: image } });
  };

  public static setGroup = (group: string): void => {
    const state = store.getState();
    const user = state.user.tempUser;
    if (user?.groups?.includes(group)) {
      const newGroup = user.groups?.filter((x) => group != x);
      UserService.updateFields({ groups: newGroup });
    } else {
      const currentGroups = user?.groups ?? [];
      UserService.updateFields({ groups: [...currentGroups, group] });
    }
  };

  public static setEmail = (email: string): void => {
    UserService.updateFields({ email: email });
  };
}
