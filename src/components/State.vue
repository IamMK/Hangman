<template>
    <div class="main__state">
        <p>{{status}}</p>
    </div>
</template>

<script>
export default {
    name: 'state',
    computed:{
    status(){
      return this.$store.state.statusText
    }
  }
}
</script>
