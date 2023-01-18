import React, { useState } from 'react'
import { Box, ButtonSearch } from './styles'
import axios from 'axios'

const SearchBox = () => {
  const [searchBoxInputDefinition, setSearchBoxInputDefinition] = useState([])
  const [searchBoxInputWord, setSearchBoxInputWord] = useState('')

  const GetData = () => {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + searchBoxInputWord).then(response => {
      const arrayDefintions = [].concat(response.data[0].meanings[0].definitions)
      const arrayForFDefinition = []
      for (let i = 0; i < arrayForFDefinition.length; i++) {
        arrayForFDefinition[i] = response.data[0].meanings[0].definitions[i].definition
      }

      if (arrayDefintions.length === 1) {
        setSearchBoxInputDefinition(response.data[0].meanings[0].definitions[0].definition)
      } else {
        setSearchBoxInputDefinition(arrayForFDefinition)
      }
      console.log(arrayForFDefinition)
      console.log(arrayForFDefinition.length)
    })
  }

  const handleChange = (event) => {
    event.preventDefault()
    setSearchBoxInputWord(event.target.value)
  }

  const Result = () => {
    return (
      <>
        <p>{searchBoxInputWord}</p>
        <p>{searchBoxInputDefinition}</p>
      </>
    )
  }
  return (
    <>
      {searchBoxInputDefinition.length === 0
        ? (<>
          <Box
            type='search'
            onChange={handleChange}
            value={searchBoxInputWord}
          />
          <ButtonSearch onClick={GetData} />
        </>
          )
        : (<Result />)}
    </>
  )
}

export default SearchBox
