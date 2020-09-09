let addNewWords = (newWords) => {
    return (dispatch) => {
        return dispatch({
            type:"ADD_NEW_WORDS",
            newWords: newWords
        })
    }
}

export default addNewWords;