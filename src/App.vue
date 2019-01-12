<template>
  <div class="hangman">
    <Keyboard />
    <Word />
    <State />
  </div>
</template>

<script>
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import State from './components/State'

export default {
  name: 'app',
  components:{
    Word, Keyboard,State
  },
  computed:{
    stateInfo(){
      return this.$store.getters.checkIfLose
    }
  }
}
</script>