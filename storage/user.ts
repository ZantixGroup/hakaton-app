import { DataStorage } from './init'
import GeneralStore from '~/store/modules/general'

export class UserData {
  private static username: string | undefined
  private static surname: string | undefined
  private static score: number | undefined


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
      } = JSON.parse(storage)
      const token = this._context.$auth.strategy.token.get()
      if (token !== undefined && token && a.username && a.surname && a.id) {
        this.setUser(a.username, a.surname, a.id, a.id)
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
    this.saveState()
  }

  public static setUser(
    username: string,
    surname: string,
    id: number,
    score: number
  ) {
    this.isLoggedIn = true
    this.username = username
    this.surname = surname
    this.id = id
    this.score = score
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

  static get Score(): number | undefined {
    return GeneralStore.getValue(['user', 'score'])
  }
}