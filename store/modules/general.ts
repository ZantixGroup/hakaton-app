import Vue from 'vue'

export default class GeneralStore {
  private static store: any = {}
  public static initalize(_context: any) {
    // Vuex, etc does not work/have normal doc
    this.store = _context.$store
  }

  public static setValue(location: string[], value: any) {
    let a = this.store
    for (let i = 0; i < location.length - 1; i++) {
      const element = location[i]
      if (a[element] === undefined) {
        Vue.set(a, element, {})
      }
      a = a[element]
    }
    if (
      a[location[location.length - 1]] &&
      a[location[location.length - 1]].__ob__
    ) {
      a[location[location.length - 1]] = value
    } else {
      Vue.set(a, location[location.length - 1], value)
    }
  }

  public static getValue(location: string[]) {
    let a = this.store
    for (let i = 0; i < location.length; i++) {
      const element = location[i]
      if (a[element] === undefined) {
        return undefined
      }
      a = a[element]
    }
    return a
  }
}