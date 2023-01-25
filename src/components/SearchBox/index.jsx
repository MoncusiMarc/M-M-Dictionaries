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
    // axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + name).then(response => {
    //   dispatch(insertWord(response.data[0]))
    // })
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=SJmFMHYSAcOlNthoa9wrEaawk78UGKfy&q=' + name + '&limit=25&offset=0&rating=g&lang=en').then(response => {
      console.log(response.data.data[0].images.downsized)
      dispatch(insertGif(response.data.data[0].images.downsized))
    })
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
