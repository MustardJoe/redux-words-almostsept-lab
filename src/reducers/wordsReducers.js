import words from '../fixtures/words.json';


const initialState = {
  dictionary: [...words]
};

function wordsReducers(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default wordsReducers;
