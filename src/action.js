// this returning an object, so thunk has no work to do
export const setSearchField = (text) => {
  return {
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
  }
}

// high-order function (will return another function)
// its returning a function, thunk is waiting and used for this kind
export const requestRobots = () => (dispatch) => {
  dispatch({ type: 'REQUEST_ROBOTS_PENDING' })
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: 'REQUEST_ROBOTS_SUCCESS', payload: data}))
    .catch(err => dispatch({ type: 'REQUEST_ROBOTS_FAILED', payload: err}))
}