<template>
    <div class="main__word">
        <template v-for="item in wordArea">
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
        wordArea(){
            return this.$store.getters.wordArea
            }
    },
    methods: {
        isSpacebarItem: function(item){
            return item != 'nbsp';
        }
    }
}
</script>