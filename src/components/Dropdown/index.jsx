import React, { useState } from 'react'
import { MainDropdown, Button, MainGrid, GridRow } from './styles'

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false)

  const openDropdown = () => {
    setDropdown(true)
    console.log(dropdown)
  }

  const closeDropdown = () => {
    setDropdown(false)
  }

  const DropdownOpened = () => {
    return (
      <>
        <MainDropdown width='30rem'>
          <Button onClick={closeDropdown} />
          <MainGrid>
            <GridRow>Definition</GridRow>
            <GridRow>Synonyms</GridRow>
            <GridRow>Antonyms</GridRow>
            <GridRow>Antoher one...</GridRow>
          </MainGrid>
        </MainDropdown>
      </>
    )
  }

  const DropdownClosed = () => {
    return (
      <>
        <MainDropdown width='10rem'>
          <Button onClick={openDropdown} />
        </MainDropdown>
      </>
    )
  }

  return (
    dropdown
      ? (
        <DropdownOpened />
        )
      : (<DropdownClosed />)
  )
}

export default Dropdown
