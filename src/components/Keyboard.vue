<template>
    <div class="main__keyboard">
        <div class="main__keyboard__letter"
            v-for="item in ascii" :key="item"
            @click="lookForLetter">
            {{item}}
        </div>
        {{this.$store.getters.ask}}
    </div>
</template>

<script>
// HOT RELOAD TO ADD

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
            for(let value of this.$store.state.word.toUpperCase()){
                if( value == event.target.innerText ){
                    this.$store.getters.ask[
                        this.$store.state.word.toUpperCase().indexOf(value)
                    ] = value
                    console.log(this.$store.state.word)
                    console.log(this.$store.getters.ask)
                }
            }
        }
    }
}
</script>

