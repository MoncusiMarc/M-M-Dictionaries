import React from 'react'
import axios from 'axios'
import { Box, ButtonSearch, FatherBox } from './styles'
import { insertWord, insertGif } from '../Reducers/dictionaryReducer.js'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    const { target } = event
    const name = target.WordSearch.value
    // const apiSelection = true // false(selected dictionary api) true(selected gif api)
    const dictionaryApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + name
    const gifApi = 'https://api.giphy.com/v1/gifs/search?api_key=SJmFMHYSAcOlNthoa9wrEaawk78UGKfy&q=' + name + '&limit=25&offset=0&rating=g&lang=en'

    dispatch({ type: 'clear' })
    axios.get(dictionaryApi).then(response => { dispatch(insertWord(response.data[0])) })
    axios.get(gifApi).then(response => { dispatch(insertGif(response.data.data[0].images.downsized)) })
    // const requestOne = axios.get(dictionaryApi)
    // const requestTwo = axios.get(gifApi)
    // axios
    //   .all([requestOne, requestTwo])
    //   .then(
    //     axios.spread((...responses) => {
    //       if (!apiSelection) {
    //         dispatch(insertWord(responses[0].data[0]))
    //       } else {
    //         dispatch(insertGif(responses[1].data.data[0].images.downsized))
    //       }
    //     })
    //   )
    //   .catch(errors => {
    //     console.error(errors)
    //   })

    target.WordSearch.value = ''
  }

  return (
    <FatherBox onSubmit={submitHandler} className='SearchBox'>
      <Box type='search' name='WordSearch' />
      <ButtonSearch />
    </FatherBox>
  )
}

export default SearchBox
