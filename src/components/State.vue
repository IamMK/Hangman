<template>
    <div class="main__state">
        <p>{{stateInfo}}</p>
    </div>
</template>

<script>
export default {
    name: 'state',
    computed:{
    stateInfo(){
      return this.$store.getters.checkIfLose
    }
  }
}
</script>
