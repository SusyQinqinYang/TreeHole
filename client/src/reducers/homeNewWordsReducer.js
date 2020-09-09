export default (state = "", action) => {
    if (action.type === "ADD_NEW_WORDS") {
        return action.newWords
    }
    return state;
}