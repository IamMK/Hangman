<template>
    <div class="main__keyboard">
        <div class="main__keyboard__letter"
            v-for="item in ascii" :key="item"
            @click="lookForLetter">
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Keyboard",
    computed:{
        ascii: {
            get: function(){
                var char = [];
                for(let i = 0; i <= 25; i++){
                    char[i] = String.fromCharCode(i+65);
                }
                return char;
            }
        },
    },
    methods: {
        lookForLetter: function(event){
            if( event.target.classList.contains('main__keyboard__letter--inactive') ) return;
            if( this.$store.state.tries < 0 ) return;
            var letterFound = false;
            event.target.classList.toggle('main__keyboard__letter--inactive')
            for(let item of this.$store.state.word){
                if( item.value == event.target.innerText ){
                    this.$store.commit('goodLetter', item.id)
                    letterFound = true;
                }
            }
            if(!letterFound)    this.$store.commit('badTry')
        }
    }
}
</script>

