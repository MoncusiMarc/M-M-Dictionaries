import {} from './styles.js'
import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { dictionaryReducer } from '../Reducers/dictionaryReducer.js'
import { Provider } from 'react-redux'
import { Grid } from '../Grid/index'

const store = createStore(dictionaryReducer, composeWithDevTools())

function App () {
  return (
    <Provider store={store}>
      <Grid />
    </Provider>
  )
}

export default App
