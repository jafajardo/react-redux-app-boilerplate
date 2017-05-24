export default (state = [], action) => {
  switch (action.type) {
    case "PEOPLE_START_LOADING":
      return { state, loading: true }
    case "PEOPLE_FINISH_LOADING":
      return { state, people: action.payload.people, loading: false }
    default:
        return state;
  }
}