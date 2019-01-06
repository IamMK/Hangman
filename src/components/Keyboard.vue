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
            // Use Vuex here
            // event.target.innerText
            // console.log(this.$store.getters.ask)
            for(let value of this.$store.state.word){
                if( value == event.target.innerText ){
                    this.$store.getters.ask[
                        this.$store.state.word.indexOf(value)
                    ] = value;
                    console.log(this.$store.state.word)
                    console.log(value)
                    console.log(this.$store.getters.ask)
                }
            }
        }
    }
}
</script>
