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
    computed: {
        ask(){
            return this.$store.getters.ask
            },
            word(){
                return this.$store.state.word
            }
    },
    methods: {
        isSpacebarItem: function(item){
            return item != 'nbsp';
        }
    }
}
</script>