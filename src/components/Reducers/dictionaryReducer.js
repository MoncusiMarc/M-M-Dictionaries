export const dictionaryReducer = (state = [], action) => {
  switch (action.type) {
    case 'insert_word':{
      console.log(action.payload)
      return [action.payload]
    }
    case 'insert_gif':{
      console.log(action.payload)
      return [action.payload]
    }
    default: {
      return state
    }
  }
}

export const insertWord = (wordJson) => ({
  type: 'insert_word',
  payload: {
    word: wordJson.word,
    meaningsArray: wordJson.meanings
  }
})

export const insertGif = (Json) => ({
  type: 'insert_gif',
  payload: {
    url: Json.url
  }
})
