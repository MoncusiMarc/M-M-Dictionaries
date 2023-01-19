import React from 'react'
import axios from 'axios'
import { Box, ButtonSearch, FatherBox } from './styles'
import { insertWord } from '../Reducers/dictionaryReducer.js'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    const { target } = event
    const name = target.WordSearch.value
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + name).then(response => {
      dispatch(insertWord(response.data[0]))
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
