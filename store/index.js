export const state = () => ({
  all: {},
})
export const mutations = {
  setData(state, formData) {
    let a = state.all
    for (let i = 0; i < formData.location.length - 1; i++) {
      const element = formData.location[i]
      if (a[element] === undefined) {
        a[element] = {}
      }
      a = a[element]
    }
    a[formData.location[formData.location.length - 1]] = formData.value
  },
}
export const getters = {
  field: (state) => (data) => {
    let a = state.all
    for (let i = 0; i < data.location.length; i++) {
      const element = data.location[i]
      if (a[element] === undefined) {
        return undefined
      }
      a = a[element]
    }
    return a
  },
}
export const actions = {}