import React, { useState } from 'react'
import { MainDropdown, Button, MainGrid, GridRow } from './styles'

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false)

  const openDropdown = () => {
    setDropdown(true)
  }

  const closeDropdown = () => {
    setDropdown(false)
  }

  const DropdownOpened = () => {
    return (
      <>
        <MainDropdown width='25%' widthMobile='90%'>
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
        <MainDropdown width='0%' minWidth='0%'>
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
