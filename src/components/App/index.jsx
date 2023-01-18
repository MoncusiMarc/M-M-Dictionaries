import axios from 'axios'
import {} from './styles.js'
import { legacy_createStore as createStore } from 'redux'
import { dictionaryReducer, insertWord } from '../Reducers/dictionaryReducer.js'
import { Provider } from 'react-redux'
import { Grid } from '../Grid/index'

const store = createStore(dictionaryReducer)

axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello').then(response => {
  console.log(response.data[0].word)
  store.dispatch(insertWord(response.data[0]))
})

function App () {
  return (
    <Provider store={store}>
      <Grid />
    </Provider>   
  )
}

export default App
