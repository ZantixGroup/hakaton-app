import { UserData } from './user'
import GeneralStore from '~/store/modules/general'
export class DataStorage {
  public static context: any
  public static initialize(_context: any) {
    this.context = _context
    GeneralStore.initalize(_context)
    UserData.initialize(_context)

  }
}