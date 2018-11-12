const initState = {
  papers: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_PAPERS") {
    console.log(action.papers)
    return {
      ...state,
      papers: action.papers
    }
  }
  else if (action.type === "REMOVE_PAPER") {
    let newPapers = [];
    newPapers.push(state.papers[1]);
    return {
      ...state,
      papers: newPapers
    }
  }
  else if (action.type === "ADD_PAPER") {
    return {
      ...state,
      papers: [...state.papers, action.paper]
    }
  }
  return state;
}

export default rootReducer;