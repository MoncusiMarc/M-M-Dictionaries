import React from 'react'
import { Button } from './styles'

const DropdownButton = ({ invertDropdown }) => {
  return (
    <Button onClick={invertDropdown} />
  )
}

export default DropdownButton
