<template>
  <div class="hangman">
    <Word></Word>
  </div>
</template>

<script>
import Word from './components/Word'

export default {
  name: 'app',
  components:{
    Word
  },
  data () {
    return {
      tries: 5,
      lose: false,
      win: false
    }
  },
  watch: {
    tries: function(){
      if(tries <= 0){
        this.lose = true;
        console.log("You sicky dick :)");
      }
    },
  },
  methods: {
    fail: function(){
      this.tries--;
    }
  }
}
</script>