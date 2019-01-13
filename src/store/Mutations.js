export const goodLetter = (state, id) => {
        state.word[id].visible = true
        state.statusText = "Good. But luck is not eternal"
}

export const badTry = state => {
    state.tries--;
    switch(state.tries){
        case 4: state.statusText = "It's like your finger. Dead finger."; break;
        case 3: state.statusText = "Do you like this? Fight versus Death?"; break;
        case 2: state.statusText = "Do you want to die? I can do this"; break;
        case 1: state.statusText = "I feel your soul. Smels like... apple"; break;
        case 0: state.statusText = "Do you know Death Angels like apples? They are in your soul!"; break;
        default: state.statusText = "Yea. Die, die, die!"
    }
}