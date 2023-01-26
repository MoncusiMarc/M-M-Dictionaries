import React from 'react'
import { DropdownList, ListItem } from './styles'

const Dropdown = ({ changeInformation }) => {
  return (
    <DropdownList>
      <ListItem onClick={changeInformation('definitions')}>Definition</ListItem>
      <ListItem onClick={changeInformation('synonyms')}>Synonyms</ListItem>
      <ListItem onClick={changeInformation('antonyms')}>Antonyms</ListItem>
      <ListItem onClick={changeInformation('images')}>Images</ListItem>
    </DropdownList>
  )
}

export default Dropdown
