import React, { useState } from 'react'
import { Box, ButtonSearch } from './styles'
import axios from 'axios'

const SearchBox = () => {
  const [searchBoxInputDefinition, setSearchBoxInputDefinition] = useState([])
  const [searchBoxInputWord, setSearchBoxInputWord] = useState('')

  const GetData = () => {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + searchBoxInputWord).then(response => {
      const array = [].concat(response.data[0].meanings[0].definitions)
      const array2 = []
      for (let i = 0; i < array.length; i++) {
        array2[i] = response.data[0].meanings[0].definitions[i].definition
      }

      if (array.length === 1) {
        setSearchBoxInputDefinition(response.data[0].meanings[0].definitions[0].definition)
      } else {
        setSearchBoxInputDefinition(array2)
      }
      console.log(array2)
      console.log(array2.length)
    })
  }

  const handleChange = (event) => {
    event.preventDefault()
    setSearchBoxInputWord(event.target.value)
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
        : (<>
          <p>{searchBoxInputWord}</p>
          <p>{searchBoxInputDefinition}</p>
        </>)}
    </>
  )
}

export default SearchBox
