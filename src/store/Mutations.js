export const goodLetter = (state, id) => {
        for(let item of state.word){
            if(item.id == id) item.visible = true;
        }
}