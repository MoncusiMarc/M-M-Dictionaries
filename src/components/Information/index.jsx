import React from 'react'
import { InformationContent, Title, Content } from './styles'
import { useSelector } from 'react-redux'
// import { Selection } from '../Dropdown'

const Information = () => {
  const Words = useSelector((state) => state)
  const selection = 'antonyms'

  const Definitions = () => {
    return (
      <InformationContent>
        {Words.map((word) => (
          <div key={word.word}>
            <Title>
              {word.word}
            </Title>
            <Content>
              {word.meaningsArray.map((meanings) => (
                meanings.definitions.map((definition, index) => (
                  <p key={index}>{index}.-{definition.definition}</p>
                ))
              ))}
              <br />
            </Content>
          </div>
        ))}
      </InformationContent>
    )
  }
  const Synonyms = () => {
    return (
      <InformationContent>
        {Words.map((word) => (
          <div key={word.word}>
            <Title>
              {word.word}
            </Title>
            <Content>
              {word.meaningsArray.map((meanings, index2) => (
                <div key={index2}>
                  <p>{index2}</p>
                  {meanings.synonyms.map((synonym, index) => (
                    <p key={index}> {synonym}</p>
                  ))}
                </div>
              ))}
              <br />
            </Content>
          </div>
        ))}
      </InformationContent>

    )
  }

  const Antonyms = () => {
    return (
      <InformationContent>
        {Words.map((word) => (
          <div key={word.word}>
            <Title>
              {word.word}
            </Title>
            <Content>
              {word.meaningsArray.map((meanings, index2) => (
                <div key={index2}>
                  <p>{index2}</p>
                  {meanings.antonyms.map((antonym, index) => (
                    <p key={index}> {antonym}</p>
                  ))}
                </div>
              ))}
              <br />
            </Content>
          </div>
        ))}
      </InformationContent>
    )
  }

  const Images = () => {
    return (
      <InformationContent>
        {Words.map((word) => (
          <div key={word.word} />
        ))}
      </InformationContent>
    )
  }
  if (selection === 'definitions') {
    return (<Definitions />)
  } else if (selection === 'synonyms') {
    return (<Synonyms />)
  } else if (selection === 'antonyms') {
    return (<Antonyms />)
  }
}

export default Information
