import React from 'react'
import { Button, DropdownTop } from './styles'

const DropdownButton = ({ invertDropdown, isDropdown }) => {
  return (
    <DropdownTop className='DropdownButton' isDropdown={isDropdown}>
      <Button onClick={invertDropdown} />
    </DropdownTop>
  )
}

export default DropdownButton
