<template>
  <div class="tab-kd" >
    <div class="tab-item" v-for="i in loaditems">
      <router-link :to="i.path" >
        <i :class="i.class"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "bottom",
      data(){
        return {
          loaditems:[
            {
              path:'/',
              class:'iconfont icon-home'
            },
            {
              path:'/',
              class:'iconfont icon-shopping'
            },
            {
              path:'/',
              class:'iconfont icon-earth'
            },
            {
              path:'/',
              class:'iconfont icon-position'
            },
            {
              path:'/',
              class:'iconfont icon-person'
            },
          ]
        }
      }
    }
</script>

<style scoped>
  .tab-kd{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed!important;
    left: 0;
    bottom: 0;
    z-index: 999;
    background: #000;
    width: 100%;
    height: 48px;
  }
  .tab-kd .tab-item{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .tab-kd .tab-item a{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .tab-kd .tab-item a i{
    font-size: 35px;
    color: #7e8c8d;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
</style>
