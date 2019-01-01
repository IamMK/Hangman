<template>
  <div class="hangman">
    <Keyboard />
    <Word />
  </div>
</template>

<script>
import Word from './components/Word'
import Keyboard from './components/Keyboard'

export default {
  name: 'app',
  components:{
    Word, Keyboard
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