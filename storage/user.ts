import { DataStorage } from './init'
import GeneralStore from '~/store/modules/general'

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
    const storage = localStorage.getItem('user')
    if (storage && storage !== 'undefined') {
      const a: {
        username: string | undefined
        surname: string | undefined
        score: number | undefined
        id: number | undefined
        s_level: number | undefined
        t_level: number | undefined
        e_level: number | undefined
        m_level: number | undefined
        avatar: number | undefined
      } = JSON.parse(storage)
      const token = this._context.$auth.strategy.token.get()
      if (token !== undefined && token && a.username && a.surname && a.id && a.score !== undefined && a.s_level !== undefined && a.t_level !== undefined && a.e_level !== undefined && a.m_level !== undefined && a.avatar !== undefined) {
        this.setUser(a.username, a.surname, a.id, a.score, a.s_level, a.t_level, a.e_level, a.m_level, a.avatar)
      } else {
        this.wipeData()
      }
    } else {
      this.wipeData()
    }
  }

  private static saveState() {
    if (this.isLoggedIn) {
      const obj = {
        name: this.name,
        surname: this.surname,
        isLoggedIn: this.isLoggedIn,
        id: this.id,
        score: this.score,
      }
      GeneralStore.setValue(['user'], obj)
      localStorage.setItem('user', JSON.stringify(obj))
    } else {
      GeneralStore.setValue(['user'], undefined)
      localStorage.setItem('user', JSON.stringify(undefined))
    }
  }

  public static wipeData() {
    this.username = undefined
    this.surname = undefined
    this.id = undefined
    this.score = undefined
    this.isLoggedIn = false
    this.s_level = undefined
    this.t_level = undefined
    this.e_level = undefined
    this.m_level = undefined
    this.avatar = undefined
    this.saveState()
  }

  public static setUser(
    username: string,
    surname: string,
    id: number,
    score: number,
    s_level: number,
    t_level: number,
    e_level: number,
    m_level: number,
    avatar: number,
  ) {
    this.isLoggedIn = true
    this.username = username
    this.surname = surname
    this.id = id
    this.score = score
    this.s_level = s_level
    this.t_level = t_level
    this.e_level = e_level
    this.m_level = m_level
    this.avatar = avatar
    this.saveState()
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