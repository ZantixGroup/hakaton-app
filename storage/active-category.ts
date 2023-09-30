import { DataStorage } from './init'
import GeneralStore from '~/store/modules/general'

export type routeType = {
  route: string,
  name: string,
  human: string,
}

export class UserData {
  private static username: string | undefined
  private static surname: string | undefined
  private static score: number | undefined

  private static s_level: number | undefined
  private static t_level: number | undefined
  private static e_level: number | undefined
  private static m_level: number | undefined
  private static avatar: number | undefined


  private static isLoggedIn: boolean
  private static id: number | undefined

  private static _context: any
  public static initialize(_context: any) {
    this._context = _context
  }
 
  static get LastRoute(): { 
    
  } {
    return GeneralStore.getValue(['cat', 'lastroute'])
  }

  static get CurrentRoute(): string {
    return GeneralStore.getValue(['cat', 'curroute'])
  }


  static get Id(): boolean {
    return GeneralStore.getValue(['user', 'id'])
  }

  static get IsLoggedIn(): boolean {
    return GeneralStore.getValue(['user', 'isLoggedIn'])
  }

  static get Username(): boolean {
    return GeneralStore.getValue(['user', 'username'])
  }

  static get Surname(): boolean {
    return GeneralStore.getValue(['user', 'surname'])
  }

  static get S_level(): number | undefined {
    return GeneralStore.getValue(['user', 's_level'])
  }

  static get T_level(): number | undefined {
    return GeneralStore.getValue(['user', 't_level'])
  }

  static get E_level(): number | undefined {
    return GeneralStore.getValue(['user', 'e_level'])
  }

  static get M_level(): number | undefined {
    return GeneralStore.getValue(['user', 'm_level'])
  }

  static get Avatar(): number | undefined {
    return GeneralStore.getValue(['user', 'avatar'])
  }

  static get Score(): number | undefined {
    return GeneralStore.getValue(['user', 'score'])
  }

}