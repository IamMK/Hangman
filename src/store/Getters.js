export default {
    wordArea: state => {
        let wordAreaModifier = []
        for(let item of state.word){
            if(item.value == " ") wordAreaModifier.push('nbsp')
            else if(item.visible) wordAreaModifier.push(item.value)
            else wordAreaModifier.push('')
        }
        return wordAreaModifier;
    },
    checkIfWin: state => {
        const allLettersVisible = state.word.every( element => (element.visible || element.value == ' ') )
        if( allLettersVisible ) state.statusText = "Today you did not day. See you later, bro."
        else state.statusText = "Scared? Not yet? Give me a moment."
    }
}
