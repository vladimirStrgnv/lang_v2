import { useReducer } from 'react';

type BookState = {
    section: number,
    page: number,
    words: any[],
    curentWord: any
}

const initialState: BookState = {
  section: 0,
  page: 0,
  words: [],
  curentWord: {}
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_SECTION":
      return { ...state, section: action.value, page: 0 };
    case "CHANGE_WORDS":
      return { ...state, words: action.value.words, curentWord:  action.value.words[0]};
    case "CHANGE_PAGE":
      return { ...state, page:  action.value};
    case "CHANGE_WORD":
      return { ...state, curentWord: state.words.find(word => word.id === action.value) };
    case "CHANGE_WORD_DIFFICULTY":
      return { 
        ...state, 
        curentWord: {...state.curentWord, userWord: {difficulty: action.value.difficulty}},
        words: state.words.map(word => {
        if (word.id === action.value.id) {
          return {...word, userWord: {difficulty: action.value.difficulty}};
        } else {
          return word;
        }
      })};
    default:
      return state;
  }
}

const useCreateStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sectionDispatch = (value) => {
    dispatch({
      type: "CHANGE_SECTION",
      value: value,
    });
  };

  const wordsDispatch = (value) => {
    dispatch({
      type: "CHANGE_WORDS",
      value: value,
    });
  };

  const pageDispatch = (value) => {
    dispatch({
      type: "CHANGE_PAGE",
      value: value,
    });
  };

  const wordDispatch = (value) => {
    dispatch({
      type: "CHANGE_WORD",
      value: value,
    });
  };

  const wordDifficultyDispatch = (id, difficulty) => {
    dispatch({
      type: "CHANGE_WORD_DIFFICULTY",
      value: {id, difficulty}
    });
  };

  return {
    sectionDispatch,
    wordsDispatch,
    pageDispatch,
    wordDispatch,
    wordDifficultyDispatch,
    state,
  };
};
  
export default useCreateStore;