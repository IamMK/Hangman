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
    checkIfLose: state => {
        var allVisible = false;
        for(let item of state.word){
            if(!item.visible && item.value != " "){
                allVisible = false;
                console.log(allVisible)
                break;
            }
            else allVisible = true;
        }
        if(allVisible) return "You have win it!!!"
        else if(state.tries < 0){
            return "Wasted!!!"
        }
    }
}
