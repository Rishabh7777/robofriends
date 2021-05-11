export const setSearchField = (text) => {
  return {
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
  }
}