import React from 'react'
import Dropdown from '../Dropdown/index'
import SearchBox from '../SearchBox/index'
import { useSelector } from 'react-redux'
import { FullView, SearchingView, Information, Footer } from './styles.js'

export const Grid = () => {
  const Words = useSelector((state) => state)

  if (Words.length > 0) {
    return (
      <FullView className='FullView'>
        <Dropdown className='Dropdown' />
        <SearchBox className='SearchBox' />
        <Information className='Information'> This is the Informatio</Information>
        <Footer className='Footer'> This is the Footer</Footer>
      </FullView>
    )
  } else {
    return (
      <SearchingView className='SearchingView'>
        <SearchBox className='searchBox'> _ </SearchBox>
      </SearchingView>
    )
  }
}
