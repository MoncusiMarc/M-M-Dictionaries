import React from 'react'
import { useSelector } from 'react-redux'
import { FullView, SearchingView, SearchBox, SideMenu, Information, Footer } from './styles.js'

export const Grid = () => {
  const Words = useSelector((state) => state)

  let Grid
  if (Words.length > 0) {
    Grid = FullView
  } else {
    Grid = SearchingView
  }
  return (
    <Grid>
      <SideMenu />
      <SearchBox />
      <Information />
      <Footer />
    </Grid>
  )
}
