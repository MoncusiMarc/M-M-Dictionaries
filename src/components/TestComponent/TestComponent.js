import React from 'react'
import { useSelector } from 'react-redux'

const TestComponent = () => {
  const Words = useSelector((state) => state)
  return (
    <div>
      {Words.map((word) => (<p key={word.word}> {word.word}</p>))}
    </div>
  )
}

export default TestComponent
