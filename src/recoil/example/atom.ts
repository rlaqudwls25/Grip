import { atom } from 'recoil'

const movieListState = atom({
  key: '#movieListState',
  default: [],
})

export default movieListState
