export default {
    ask: state => {
        var temp = [];
        for(let item of state.word){
        if(item == " ") temp.push('nbsp');
        else temp.push('');
        }
        return temp;
    }
}
