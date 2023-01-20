import React, { useState } from 'react'
import Dropdown from '../Dropdown/index'
import DropdownButton from '../DropdownButton'
import SearchBox from '../SearchBox/index'
import Footer from '../Footer/index'
import { useSelector } from 'react-redux'
import { FullView, SearchingView, Information } from './styles.js'

export const Grid = () => {
  const [dropdown, setDropdown] = useState(false)

  const invertDropdown = () => {
    setDropdown(!dropdown)
  }

  const Words = useSelector((state) => state)
  if (Words.length > 0) {
    return (
      <FullView className='FullView' isDropdown={dropdown}>
        <DropdownButton className='DropdownButton' invertDropdown={invertDropdown} isDropdown={dropdown} />
        {dropdown ? <Dropdown className='Dropdown' /> : ''}
        <SearchBox className='SearchBox' />
        <Information className='Information'>This is the Information</Information>
        <Footer className='Footer' />
      </FullView>
    )
  } else {
    return (
      <SearchingView className='SearchingView'>
        <SearchBox className='searchBox'> _ </SearchBox>
        <Footer className='Footer' />
      </SearchingView>
    )
  }
}
