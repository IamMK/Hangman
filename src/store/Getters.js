export default {
    ask: state => {
        var temp = [];
        for(let item of state.word){
        if(item.value == " ") temp.push('nbsp');
        else if(item.visible) temp.push(item.value);
        else temp.push('');
        }
        return temp;
    }
}
