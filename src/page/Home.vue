<template>
    <div>
      <!--头部可下载-->
      <div class="down" >
        <div class="down_left">
          <div class="down_app_close" id="down"></div>
          <div class="down_logo"></div>
          <div class="down_text">
            <p class="down_text_title">注册享1880元大礼包</p>
            <p class="down_text_desc">下载第五大道APP</p>
          </div>
        </div>
        <div class="down_right">
          立即体验
        </div>
      </div>
      <!--搜索框-->
      <div class="sticky">
        <div class="search">

          <router-link class="search_text" to="/search" tag="div">
            <div class="search_logo"></div>
            <div class="search_logo_s"></div>
          </router-link>

          <div class="shop_cart"></div>
        </div>
        <ul class="nav_little">
          <li v-for="item in home_data">
            <a href="#">{{item.ad_name}}</a>
          </li>
        </ul>
      </div>

      <div class="home">
        <!--轮播-->
        <div class="swiper_box">
          <Swiper :lbdata="home_lbdata"></Swiper>
        </div>
        <!--点击按钮-->
        <div class="fun_nav">
          <ul class="fun_border">
            <li class="fun_list" v-for="item in home_data" :style="{backgroundImage: 'url('+ item.ad_code +')'}">
              <a href="#">{{item.ad_name}}</a>
            </li>
          </ul>
        </div>

        <!--四块-->
        <div class="adv1">
          <ul class="adv1_warpper">
            <li class="adv1_item" v-for="i in  home_SK">
              <a href="#" class="bg-img">
                <img :src="i.ad_code" alt="" >
              </a>
            </li>
          </ul>
        </div>
        <!--主体内容-->
        <div class="content">
          <div class="new_register" v-for="i in home_content_top">
            <a href="#">
              <img :src="i.ad_code" alt="" class="main_img" >
            </a>
          </div>
          <div class="new_register new_register_hook" v-for="i in home_content_article">
            <a href="#">
              <div class="img_warpper trangle">
                <span></span>
                <img :src="i.ads_info.ad_code" alt="">
              </div>
              <div class="artical-warpper">
                <strong class="name">{{i.ads_info.ad_name}}</strong>
                <p class="detail">{{i.ads_info.ad_title}}</p>
              </div>
            </a>
            <div class="clearscroll" v-if="i.ads_info.product_info.length!=0">
              <div class="ul-warpper">
                <ul class="ul-hook ul-hooks ul-item">
                  <li class="item" v-for="j in i.ads_info.product_info">
                    <a class="jump_warp" href="#">
                      <div class="img" style="height:130px">
                        <img class="img-hook" v-lazy="j.product_thumb" >
                    </div>
                      <p class="name">{{j.ad_title}}</p>
                      <p class="price">{{j.ad_subtitle}}</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dog"></div>
            </div>
          </div>
          <div class="shangou" v-for="x in home_content_shangou">
            <a href="#">
              <div class="img_warpper">
                <div class="s-flag"></div>
                <img class="s-img" v-lazy="x.sales_thumb">
              </div>
              <div class="content-warpper">
                <div class="conleft">
                  <p class="name_wrapper">
                    <span class="name">{{x.sales_title}}</span>
                    <span class="zhekou">{{x.discount_info}}</span>
                  </p>
                  <p class="detail">{{x.sales_desc}}</p>
                </div>
                <div class="conright">

                  <img class="logo" width="60" height="30" v-lazy="x.sales_logo" lazy="loaded">
                </div>
              </div>
            </a>
          </div>
          <div class="new_register" v-for="n in home_content_ads_info">
            <a class="artical_link" href="#">
              <div class="img_warpper trangle" style="position:relative;padding-bottom:78.13333333333333%;height:0;overflow:hidden">
                <span></span>
                <img class="main_img" :src="n.ad_code">
              </div>
              <div class="artical-warpper">
                <strong class="name">{{n.ad_name}}</strong>
                <p class="detail">{{n.ad_title}}</p>
              </div>
            </a>
            <div class="clearscroll" v-if="n.product_info.length!=0">
              <div class="ul-warpper">
                <ul class="ul-hook ul-hooks ul-item">
                  <li class="item" v-for="j in n.product_info">
                    <a class="jump_warp" href="#">
                      <div class="img" style="height:130px">
                        <img class="img-hook" v-lazy="j.product_thumb" >
                      </div>
                      <p class="name">{{j.ad_title}}</p>
                      <p class="price">{{j.ad_subtitle}}</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dog"></div>
            </div>
          </div>
          <div class="loadmore" id="loadbox"> 加载中 <img src="../img/home_loading.gif" width="13" height="13"> </div>

        </div>

        <!--回到顶部-->
        <div class="gotop gtFade-transition">

        </div>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Swiper from './Swiper'
    export default {
        name: "Home",
        components:{
         Swiper,
        },
        computed:{
          ...mapState('Homestore',['home_data','home_lbdata','home_SK','home_content','home_content_top','home_content_article','home_content_shangou','home_content_ads_info']),
        },
        mounted(){
          let that = this;
          let arr = [];
          this.$store.dispatch('Homestore/get_homebtn');
          this.$store.dispatch('Homestore/get_homelb');
          document.getElementById('down').onclick=function () {
            document.querySelector('.down').style.display='none';
            document.querySelector(".sticky").style.position='fixed';
            document.querySelector(".sticky").style.top= '0px';
            document.querySelector(".sticky").style.left= '0px';
            document.querySelector(".sticky").style.right= '0px';
          };
          this.$store.dispatch('Homestore/get_homeSK');
          this.$store.dispatch('Homestore/get_homecontent');
          window.onscroll = function (e) {
            //最后的loading检测模块
            let io = new IntersectionObserver(function (e) {
              if (e[0].intersectionRatio==1) {
                console.log(22222222222222)
                that.$store.dispatch('Homestore/get_home_ads')
              }
            });
            io.observe(document.getElementById('loadbox'));


            let ts = document.querySelector('.down').style.display;
            let sT = document.documentElement.scrollTop;
            let opa = sT/630;
            if (opa>=0.95){
              document.querySelector(".sticky").style.backgroundColor='rgba(0,0,0,.95)';
            }else{
              document.querySelector(".sticky").style.backgroundColor='rgba(0,0,0,'+opa+')';
            }
            if (sT>=60 || ts =='none') {
              document.querySelector(".sticky").style.position='fixed';
              document.querySelector(".home").style.marginTop='0px';
              document.querySelector(".sticky").style.top= '0px';
              document.querySelector(".sticky").style.left= '0px';
              document.querySelector(".sticky").style.right= '0px';
            }else{
              document.querySelector(".sticky").style.position='relative';
              document.querySelector(".home").style.marginTop='-44px';
            }

            if (sT>=450){
              document.querySelector(".nav_little").style.display='flex';
            }else {
              document.querySelector(".nav_little").style.display='none';
            }
            if (sT>=530){
              document.querySelector(".gotop").style.bottom='60px';
            }else {
              document.querySelector(".gotop").style.bottom='1px';
            }
          }


        }
    }
</script>

<style scoped>
  .down{
    height: 60px;
    background: #000;
    -webkit-box-pack: justify;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .down .down_left{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    justify-content: flex-start;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .down .down_app_close{
    background-image: url('../img/home_close.png');
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: 12px 0;
    padding: 0 12px 0 12px;
  }
  .down .down_logo{
    background-image: url('../img/home_download.png');
    width: 48px;
    height: 48px;
    background-size: 48px 48px;
    background-repeat: no-repeat;
  }
  .down .down_left .down_text{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: left;
    padding-left: 10px;
    height: 100%;
  }
  .down .down_left .down_text .down_text_title{
    font-size: 13px;
    color: #fff;
    margin-top: 7px;
    height: 24px;
    line-height: 24px;
  }
  .down .down_left .down_text .down_text_desc{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #999;
  }
  .down .down_right{
    width: 84px;
    height: 36px;
    background: #f33;
    text-align: center;
    line-height: 36px;
    border-radius: 5px;
    font-size: 13px;
    color: #fff;
    margin-right: 12px;
  }
  .sticky{
    height: 44px;
    position: relative;
    z-index: 999;
  }
  .sticky .search{
    background-image:url("../img/home_search_bk.png");
    width: 100%;
    height: 44px;
    background-size: 100% 44px;
    background-repeat: no-repeat;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .sticky .search .search_text{
    height: 30px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: #fff;
    background-color: hsla(0,0%,100%,.25);
    border-radius: 4px;
    margin-left: 17px;
    margin-right: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .sticky .search .search_text .search_logo{
    width: 13px;
    height: 13px;
    background-image: url('../img/home_search_se.png');
    background-size: 13px 13px;
    background-repeat: no-repeat;
    margin: 0 8px;
  }
  .sticky .search .search_text .search_logo_s{
    width: 75px;
    height: 12px;
    background-image: url('../img/home_search_lg.png');
    background-size: 75px 12px;
    background-repeat: no-repeat;
  }
  .sticky .search .shop_cart{
    width: 22px;
    height: 22px;
    background-image: url('../img/home_search_cart.png');
    background-size: 22px 22px;
    background-repeat: no-repeat;
    margin-right: 17px;
    position: relative;
  }
  .sticky .nav_little{
    height: 39px;
    background: #fff;
    display: flex;
    display: none;
  }
  .sticky .nav_little li{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: \\9ED1\4F53;
    font-size: 15px;
    color: #999;
  }
  .sticky .nav_little li a{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 39px;
    color: #7e8c8d;;
  }
  .home{
    background: #f2f2f2;
    width: 100%;
    margin-top: -44px;
    padding-bottom: 49px;
  }
  .home .swiper_box{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .home .swiper_box{
    overflow: hidden;
  }
  .home .fun_nav{
    position: relative;
    padding-top: 20%;
  }
  .home .fun_nav .fun_border{
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
  }
  .home .fun_nav .fun_border .fun_list{
    float: left;
    height: 100%;
    font-size: 12px;
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center 32%;
    width: 20%;
  }
  .home .fun_nav .fun_border .fun_list a{
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 63%;
    color: #7e8c8d;
    text-decoration: none;
    text-align: center;
  }
  .adv1{
    margin-bottom: 3px;
    width: 100%;
    overflow: hidden;
  }
  .adv1 .adv1_warpper .adv1_item{
    float: left;
    width: calc(50% - 3.5px);
    margin-bottom: 7px;
  }
  .adv1 .adv1_warpper>li:nth-of-type(2n){
    margin-left: 3.5px;
  }
  .adv1 .adv1_warpper>li:nth-of-type(2n+1){
    margin-right: 3.5px;
  }
  .adv1 .adv1_warpper .adv1_item .bg-img{
    color: #7e8c8d;
    text-decoration: none;
  }
  .adv1 .adv1_warpper .adv1_item .bg-img img{
    width: 100%;
    vertical-align: top;
  }
  .content .new_register{
    margin-bottom: 10px;
    position: relative;
  }

  .content .new_register a{
    display: block;
  }
  .content .new_register a .main_img{
    width: 100%;
    vertical-align: top;
  }
  .content .new_register a .img_warpper{
    position: relative;
    height: 0;
    padding-bottom: 78.13333333333333%;
    height: 0;
    overflow: hidden;
  }
  .content .new_register a .trangle span{
    position: absolute;
    bottom: 0;
    z-index: 0;
    content: " ";
    box-sizing: border-box;
    border: 9px solid transparent;
    border-bottom-color: #fff;
    display: inline-block;
    left: 50%;
    margin-left: -9px;
  }
  .content .new_register a .artical-warpper{
    text-align: left;
    padding: 18px 20px 20px;
    background: #fff;
  }
  .content .new_register a .artical-warpper .name{
    font-family: \\9ED1\4F53;
    font-weight: 700;
    display: block;
    font-size: 14px;
    color: #333;
    height: 18px;
    line-height: 18px;
    padding-bottom: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .content .new_register a .artical-warpper .detail{
    font-family: \\9ED1\4F53;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    height: 34px;
    line-height: 18px;
  }
  .content .new_register .clearscroll{
    position: relative;
  }
  .content .new_register .clearscroll .ul-warpper{
    overflow: hidden;
    padding: 20px 10px;
    background: #fff;
    overflow-x: scroll;
  }
  .content .new_register .clearscroll .ul-warpper .ul-item{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }
  .content .new_register .clearscroll .ul-warpper .ul-item .item{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 130px;
    flex: 0 0 130px;
    width: 130px;
    padding: 0 10px;
  }
  .content .new_register .clearscroll .ul-warpper .ul-item .item .img{
    height: 130px;
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

  .content .new_register .clearscroll .ul-warpper .ul-item .item .img .img-hook{
    vertical-align: middle;
    height: 130px;
  }
  .content .new_register .clearscroll .ul-warpper .ul-item .item .name{
    font-family: Aria;
    font-size: 13px;
    padding: 10px 0 5px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .content .new_register .clearscroll .ul-warpper .ul-item .item .price{
    font-family: Aria;
    font-size: 12px;
    color: #999;
  }
  .content .new_register .clearscroll .dog{
    left: 0;
    bottom: 0;
    margin-top: -8px;
    width: 100%;
    border-top: 15px solid #fff;
    position: relative;
    z-index: 9;
  }
  .content .new_register .clearscroll:after{
    display: block;
    position: absolute;
    left: 20px;
    top: 0;
    width: calc(100% - 40px);
    border-top: 1px solid #ccc;
    content: " ";
  }
  .content .shangou{
    margin-bottom: 10px;
    background: #fff;
  }
  .content .shangou .img_warpper{
    position: relative;
    height: 0;
    padding-bottom: 60.8%;
    overflow: hidden;
  }
  .content .shangou .img_warpper .s-flag{
    background-image: url("../img/home_content_shangou.png");
    position: absolute;
    width: 60px;
    height: 22px;
    background-repeat: no-repeat;
    background-size: 60px 22px;
    left: 5px;
    top: 10px;
  }
  .content .shangou .img_warpper .s-img{
    width: 100%;
    vertical-align: top;
  }
  .content .shangou .content-warpper{
    padding: 13px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .content .shangou .content-warpper .conleft{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .content .shangou .content-warpper .conleft .name_wrapper{
    font-size: 0;
    text-align: left;
    margin-bottom: 7px;
  }
  .content .shangou .content-warpper .conleft .name_wrapper .name{
    margin-right: 12px;
    color: #333;
  }
  .content .shangou .content-warpper .conleft .name_wrapper .name,.content .shangou .content-warpper .conleft .name_wrapper .zhekou{
    font-family: \\9ED1\4F53;
    font-size: 14px;
    font-weight: 700;
  }
  .content .shangou .content-warpper .conleft .name_wrapper .zhekou{
    color: #f33;
  }
  .content .shangou .content-warpper .conleft .detail{
    text-align: left;
    font-family: \\9ED1\4F53;
    font-size: 13px;
    color: #999;
  }
  .content .shangou .content-warpper .conright .logo{
    margin-top: 2px;
  }
  .content .loadmore{
    height: 30px;
    font-size: 13px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 30px 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #fff;
  }
  .gtFade-transition{
    transition: all .1s linear;
    opacity: 1;
  }
  .gotop{

    width: 40px;
    height: 40px;
    background-image: url('../img/home_top_bk.png');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    position: fixed;
    bottom: 59px;
    right: 15px;
    z-index: 50;
  }
</style>
