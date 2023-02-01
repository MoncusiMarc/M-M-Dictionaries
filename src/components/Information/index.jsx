import React from 'react'
import { InformationContent, Title, Content, Image, PartOfSpeechDiv, PartOfSpeech } from './styles'
import { useSelector } from 'react-redux'

const Information = ({ details }) => {
  const Words = useSelector((state) => state)
  const selection = details
  console.log(selection)

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
                ? word.meaningsArray.map((meanings, index) => (
                  meanings.definitions.length !== 0
                    ? (
                      <PartOfSpeechDiv key={index}>
                        <PartOfSpeech>{meanings.partOfSpeech}</PartOfSpeech>
                        {meanings.definitions.map((definition) => (
                          <p className='definition' key={definition.definition}>- {definition.definition}</p>
                        ))}
                      </PartOfSpeechDiv>)
                    : ('')
                )
                )
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
                  meanings.synonyms.length !== 0
                    ? (
                      <PartOfSpeechDiv key={index2}>
                        <PartOfSpeech>{meanings.partOfSpeech}</PartOfSpeech>
                        {meanings.synonyms.map((synonym, index) => (
                          <p key={index}> {synonym}</p>
                        ))}
                      </PartOfSpeechDiv>
                      )
                    : ('')
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
                  meanings.antonyms.length !== 0
                    ? (
                      <PartOfSpeechDiv key={index2}>
                        <PartOfSpeech>{meanings.partOfSpeech}</PartOfSpeech>
                        {meanings.antonyms.map((antonym, index) => (
                          <p key={index}> {antonym}</p>
                        ))}
                      </PartOfSpeechDiv>)
                    : ('')
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
        <Image src={Words[0].url} />
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
