<template>
  <div class="indall">
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
    import Bottom from './Bottom'
    export default {
      name: "Index",
      components:{
        Bottom
      },
    }
</script>

<style scoped>
.indall{
  height: 100%;
  width: 100%;
}
</style>
