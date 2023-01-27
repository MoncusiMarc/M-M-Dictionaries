import React from 'react'
import { DropdownList, ListItem } from './styles'

const Dropdown = ({ changeInformation }) => {
  return (
    <DropdownList>
      <ListItem key='definitions' onClick={() => changeInformation('definitions')}>Definition</ListItem>
      <ListItem key='synonyms' onClick={() => changeInformation('synonyms')}>Synonyms</ListItem>
      <ListItem key='antonyms' onClick={() => changeInformation('antonyms')}>Antonyms</ListItem>
      <ListItem key='gif' onClick={() => changeInformation('gif')}>Gif</ListItem>
    </DropdownList>
  )
}

export default Dropdown
