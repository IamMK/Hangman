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
                const char = []
                for(let i = 0; i <= 25; i++){
                    char[i] = String.fromCharCode(i+65)
                }
                return char
            }
        },
    },
    methods: {
        lookForLetter: function(event){
            if( event.target.classList.contains('main__keyboard__letter--inactive') ) return
            if( this.$store.state.gameOver ) return
            event.target.classList.toggle('main__keyboard__letter--inactive')
            let shootedIdentifiers = this.$store.state.word.filter( word => word.value == event.target.innerText )
            shootedIdentifiers.length > 0 ? this.$store.commit('goodLetter', shootedIdentifiers) : this.$store.commit('badTry')
        }
    }
}
</script>

