import React from 'react'
import { Box, ButtonSearch, FatherBox } from './styles'
import { insertWord, insertGif } from '../Reducers/dictionaryReducer.js'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    const { target } = event
    const name = target.WordSearch.value
    const dictionaryApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + name
    const gifApi = 'https://api.giphy.com/v1/gifs/search?api_key=SJmFMHYSAcOlNthoa9wrEaawk78UGKfy&q=' + name + '&limit=25&offset=0&rating=g&lang=en'

    dispatch({ type: 'clear' })

    fetch(dictionaryApi)
      .then(response => response.json())
      .then(data => { dispatch(insertWord(data[0])) })

    fetch(gifApi)
      .then(response => response.json())
      .then(data => { dispatch(insertGif(data.data[0].images.downsized)) })
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
