import React from 'react'
import { useSelector } from 'react-redux'
import { FullView, SearchingView, SearchBox, SideMenu, Information, Footer } from './styles.js'

export const Grid = () => {
  const Words = useSelector((state) => state)

  if (Words.length > 0) {
    return (
      <FullView className='FullView'>
        <SideMenu className='SideMenu'>
          <p>this is the side menu</p>
        </SideMenu>
        <SearchBox className='SearchBox'> _ </SearchBox>
        <Information className='Information' />
        <Footer className='Footer' />
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
