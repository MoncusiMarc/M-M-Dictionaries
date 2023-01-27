import React from 'react'
import { InformationContent, Title, Content, Image } from './styles'
import { useSelector } from 'react-redux'

const Information = ({ details }) => {
  const Words = useSelector((state) => state)
  const selection = details
  console.log(selection)
  //TODO: arreglar el codi, afegir el part of speech
  const Definitions = () => {
    return (
      <InformationContent>
        {Words.map((word) => (
          <div key={word.word}>
            <Title>
              {word.word}
            </Title>
            <Content>
              {Array.isArray(word.meaningsArray)
                ? word.meaningsArray.map((meanings) => (
                  meanings.definitions.map((definition, index) => (
                    <p className='definition' key={definition.definition}>{index}.-{definition.definition}</p>
                  ))
                ))
                : ''}
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
              {Array.isArray(word.meaningsArray)
                ? word.meaningsArray.map((meanings, index2) => (
                  <div key={index2}>
                    <p>{index2}</p>
                    {meanings.synonyms.map((synonym, index) => (
                      <p key={index}> {synonym}</p>
                    ))}
                  </div>
                ))
                : ''}
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
              {Array.isArray(word.meaningsArray)
                ? word.meaningsArray.map((meanings, index2) => (
                  <div key={index2}>
                    <p>{index2}</p>
                    {meanings.antonyms.map((antonym, index) => (
                      <p key={index}> {antonym}</p>
                    ))}
                  </div>
                ))
                : ''}
              <br />
            </Content>
          </div>
        ))}
      </InformationContent>
    )
  }

  const Gif = () => {
    return (
      <InformationContent>
        {Words.map((word, index) => (
          <Image key={index} src={word.url} />
        ))}
      </InformationContent>
    )
  }
  switch (selection) {
    case 'synonyms':{
      return (<Synonyms />)
    }
    case 'antonyms':{
      return (<Antonyms />)
    }
    case 'gif':{
      return (<Gif />)
    }
    case 'definitions':
    default:{
      return (<Definitions />)
    }
  }
}

export default Information
