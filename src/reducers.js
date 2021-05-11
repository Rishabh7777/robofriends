const initialState = {
  searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_FIELD':
      // new state to return
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}