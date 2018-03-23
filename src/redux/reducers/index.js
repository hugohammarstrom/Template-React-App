import data from './data'
import globalReducers from './global'
import navigation from './navigation'
import ui from "./ui"

const redux = {
  data,
  global: globalReducers,
  navigation,
  ui
}

export default redux