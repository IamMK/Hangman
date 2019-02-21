export default {
    wordArea: state => {
        const wordAreaModifier = []
        for(let item of state.word){
            if(item.value == " ") wordAreaModifier.push('nbsp')
            else if(item.visible) wordAreaModifier.push(item.value)
            else wordAreaModifier.push('')
        }
        return wordAreaModifier;
    },
    checkIfWin: state => {
        const allLettersVisible = state.word.every( element => (element.visible || element.value == ' ') )
        if( allLettersVisible ) {
            state.gameOver = true
            return "Today you did not die. See you later, bro."
        }

        switch(state.tries){
            case 4: return "It's like your finger. Dead finger."; break;
            case 3: return "Do you like this? Fight versus Death?"; break;
            case 2: return "Do you want to die? I can do this"; break;
            case 1: return "I feel your soul. Smels like... apple"; break;
            case 0: return "Do you know Death Angels like apples? They are in your soul!"; break;
            case -1: return "Yea. Die, die, die!"
            default: return "You wanna fight? I'll get kill you"
        }

    }
}
