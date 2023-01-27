import React from 'react'
import { Button, DropdownTop } from './styles'

const DropdownButton = ({ invertDropdown }, dropdown) => {
  console.log(dropdown)
  return (
    <DropdownTop className='DropdownButton' isDropdown={dropdown}>
      <Button onClick={invertDropdown} />
    </DropdownTop>
  )
}

export default DropdownButton
