export const goodLetter = (state, id) => {
        for(let item of id){
            state.word[item.id].visible = true
        }
}

export const badTry = state => {
    if(--state.tries < 0)
    state.gameOver = true
}