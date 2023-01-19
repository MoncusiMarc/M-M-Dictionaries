import {} from './styles.js'
import { legacy_createStore as createStore } from 'redux'
import { dictionaryReducer } from '../Reducers/dictionaryReducer.js'
import { Provider } from 'react-redux'
import { Grid } from '../Grid/index'

const store = createStore(dictionaryReducer)

function App () {
  return (
    <Provider store={store}>
      <Grid />
    </Provider>
  )
}

export default App
