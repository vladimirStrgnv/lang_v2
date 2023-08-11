import { useReducer } from 'react';

type GlossaryState = {
    section: number,
    page: number,
    words: any[],
    totalCount: number,
    curentWord: any,
    currentFilter: string
}

const initialState: GlossaryState = {
  section: 0,
  page: 0,
  totalCount: 0,
  words: [],
  currentFilter: 'difficult',
  curentWord: {}
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_SECTION":
      return { ...state, section: action.value, page: 0 };
    case "CHANGE_WORDS":
      return { ...state, words: action.value.words, curentWord:  action.value.words[0], totalCount: action.value.count};
    case "CHANGE_PAGE":
      return { ...state, page:  action.value};
    case "CHANGE_WORD":
      return { ...state, curentWord: state.words.find(word => word.id === action.value) };
    case "DELETE_WORD":
      const newArrayWords = state.words.filter(word => word.id !== action.value);
      return { ...state, words: newArrayWords, curentWord:  newArrayWords[0] };
    case "CHANGE_FILTER":
      return { ...state, currentFilter: action.value};
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

  const wordDeleteDispatch = (id) => {
    dispatch({
      type: "DELETE_WORD",
      value: id
    });
  };

  const filterDispatch = (value) => {
    dispatch({
      type: "CHANGE_FILTER",
      value: value,
    });
  };

  return {
    sectionDispatch,
    wordsDispatch,
    pageDispatch,
    wordDispatch,
    wordDeleteDispatch,
    filterDispatch,
    state,
  };
};
  
export default useCreateStore;