export default {
    ask: state => {
        var temp = [];
        for(let item of state.word){
        if(item.value == " ") temp.push('nbsp');
        else if(item.visible) temp.push(item.value);
        else temp.push('');
        }
        return temp;
    },
    checkIfWin: state => {
        let array = state.word.filter( ev => (ev.visible || ev.value == ' ') )
        if( array.length === state.word.length ) return "Today you did not day. See you later, bro."
        if ( state.tries < 0 ) return "Yea! Die, die die!!!"
    }
}
