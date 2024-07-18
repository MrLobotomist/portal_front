import store from '@/app/store/store.ts';
import {
  setDateOfBirth,
  setEmail,
  setGroups,
  setID,
  setName,
  setPatronymic,
  setSurname,
  setUserFilterUpdate,
  resetUserFilter,
} from '@/features/userFilters/model/userFilterSlice.ts';

export class UserFilterService {
  public static setID(value: number | null): void {
    store.dispatch(setID(value));
  }

  public static setSurname(value: string | null): void {
    store.dispatch(setSurname(value));
  }

  public static setName(value: string | null): void {
    store.dispatch(setName(value));
  }

  public static setPatronymic(value: string | null): void {
    store.dispatch(setPatronymic(value));
  }

  public static setEmail(value: string | null): void {
    store.dispatch(setEmail(value));
  }

  public static setDateOfBirth(value: string | null): void {
    store.dispatch(setDateOfBirth(value));
  }

  public static setGroups(value: string | null): void {
    store.dispatch(setGroups(value));
  }

  public static resetFilters(): void {
    store.dispatch(resetUserFilter());
    store.dispatch(setUserFilterUpdate(true));
  }

  public static setFiltersUpdate(value: boolean): void {
    store.dispatch(setUserFilterUpdate(value));
  }
}
