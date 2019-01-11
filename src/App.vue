<template>
  <div class="hangman">
    <Keyboard />
    <Word />
    {{stateInfo}}
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
  computed:{
    stateInfo(){
      return this.$store.getters.checkIfLose
    }
  }
}
</script>