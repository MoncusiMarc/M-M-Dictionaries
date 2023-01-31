export const dictionaryReducer = (state = [], action) => {
  switch (action.type) {
    case 'insert_word': {
      return [...state, action.payload]
    }
    case 'insert_gif':{
      return [...state, action.payload]
    }
    case 'clear':{
      return []
    }
    default: {
      return state
    }
  }
}
// TODO: millorar el reducer

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
