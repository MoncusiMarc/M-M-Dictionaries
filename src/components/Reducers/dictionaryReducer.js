export const dictionaryReducer = (state = [], action) => {
  switch (action.type) {
    case 'insert_word':{
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
