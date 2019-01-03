<template>
    <div class="main__word">
        <template v-for="item in ask">
            <div class="main__word__letter" 
            :key="item.id"
            v-if="isSpacebarItem(item)">
                {{item}}
            </div>
            <div class="main__word__letter--no-decoration"
            :key="item.id"
            v-else></div>
        </template>
        
    </div>
    
</template>

<script>
export default {
    name: "Word",
    data(){
        return {
            word: "Hangman the game",
        }
    },
    computed: {
        ask: function(){
                var temp = [];
                for(let item of this.word){
                    if(item == " ") temp.push('nbsp');
                    else temp.push('');
                }
                
                return temp;
            }
    },
    methods: {
        isSpacebarItem: function(item){
            return item != 'nbsp';
        }
    }
}
</script>