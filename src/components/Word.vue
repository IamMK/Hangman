<template>
    <div class="main__display__word">
        <div class="main__display__word__letter"
            v-for="item in word" :key="item.id">
        {{item}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Word",
    data(){
        return {
            word: ["H", "a", "n", "g", "m", "a", "n", " ", "t", "h", "e", " ", "g", "a", "m", "e"],
        }

    }
}
</script>