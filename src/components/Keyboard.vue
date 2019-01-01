<template>
    <div class="main__keyboard">
        <div class="main__keyboard__letter"
            v-for="item in ascii" :key="item">
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
                var char = new Array();
                for(let i = 0; i <= 25; i++){
                    char[i] = String.fromCharCode(i+65);
                }
                return char;
            }
        }
    }
}
</script>
