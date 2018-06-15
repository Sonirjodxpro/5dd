<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in lbdata">
        <a href="#">
          <img :src="item.silde_original">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器  -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    export default {
      name: "Swiper",
      props:['lbdata'],
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
    }
</script>

<style scoped>
  .swiper-slide a{
    display: block;
  }
  .swiper-slide a img{
    display: block;
    width: 100%;
  }

</style>
