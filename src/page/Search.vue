<template>
  <div class="door">
    <div class="door_tab ">
      <div class="search_bd">
        <div class="logo"></div>
        <form style="width:100%;display:flex" action="#">
          <input style="width: 100%" type="search" class="search_text" :placeholder="s_hotsearch.search_keyword[0]" @keyup="searchksy" >
        </form>
      </div>
      <span class="qux" @click="goback">取消</span>
    </div>
    <div class="door_con">
      <div>
        <div class="hotsearch">
          <div class="hot_title">热门搜索</div>
          <ul class="hot_con">
            <li class="hotlist" v-for="i in s_hotsearch.hot_search">
              <a href="#">{{i.keyword}}</a>
            </li>
          </ul>
        </div>
        <div class="searchRec">
          <div class="rectitle">
            <div class="line"></div>
            <div class="text">为您推荐</div>
            <div class="line"></div>
          </div>
          <ul class="searchrec_con">
            <li class="searchrec_list" v-for="i in s_hotsearch.recommend_products">
              <a href="#">
                <div class="rec_img">
                  <div class="img">
                    <img :src="i.product_thumb">
                  </div>
                </div>
                <p class="searchrec_desc">{{i.product_name}}</p>
                <p class="searchrec_price">￥{{i.product_price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="searchResult">
        <ul class="sec_result">
          <li class="sec_stor">
            <div class="sec_list">
              <a href="#">
                <span class="sec_logo mendian"></span>
                <div class="sec_text">搜索“a”相关专柜</div>
                <div class="jump">约18家店 <span></span></div>
              </a>
            </div>
          </li>
          <ul >
            <li class="sec_list">
              <a href="#" class="link">
                <div class="sec_text">爱彼女表</div>
                <div class="jump">约7件商品</div>
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
      name: "Search",
      methods:{
        goback(){
          this.$router.go(-1);
        },
        searchksy(){
          let aa = document.querySelector('.search_text').value;
          this.$store.commit('Searchstore/change_key',aa);
          this.$store.dispatch('Searchstore/get_searchindex')
        }
      },
      computed:{
      ...mapState('Searchstore',['s_hotsearch'])
      },
      mounted(){
        this.$store.dispatch('Searchstore/get_hotsearch');

      }
    }
</script>

<style scoped>
  .door_tab{
    height: 44px;
    position: fixed;
    top: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 1;
    width: 100%;
    background: white;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .door_tab::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.5);
    content: " ";
  }
  .door_tab .search_bd{
    margin: 0 11px 0 8px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: #f2f2f2;
    height: 32px;
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .door_tab .search_bd .logo{
    width: 13px;
    height: 13px;
    margin: 0 8px;
    background-size: 13px 13px;
    background-repeat: no-repeat;
    background-image:url("../img/search_found.png");
  }
  .door_tab .search_bd .search_text{
    outline: none;
    background-color: transparent;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    color: #999;
    font-family: \\9ED1\4F53;
    border: none;
  }
  .door_con{
    position: relative;
    margin-top: 44px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }
  .door_con div .hotsearch .hot_title{
    background: #f2f2f2;
    font-size: 13px;
    font-family: \\9ED1\4F53;
    color: #333;
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 15px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .door_con div .hotsearch .hot_con{
    padding: 10px 15px;
    color: #666;
    font-family: \\9ED1\4F53;
    font-size: 12px;
    overflow: hidden;
    padding-bottom: 0;
  }
  .door_con div .hotsearch .hot_con .hotlist{
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border: 1px solid #e5e5e5;
    border-radius: 2.5px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .door_con div .searchRec .rectitle{
    height: 46px;
    background: #f2f2f2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    font-size: 14px;
  }
  .door_con div .searchRec .rectitle .line{
    width: 20px;
    position: relative;
  }
  .door_con div .searchRec .rectitle .line::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #999;
    content: " ";
  }
  .door_con div .searchRec .rectitle .text{
    margin: 0 5px;
  }
  .door_con div .searchRec .searchrec_con{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 15px;
    width: calc(100% - 30px);
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .door_con div .searchRec .searchrec_con .searchrec_list{
    width: 42%;
    margin: 15px 0;
    text-align: center;
  }
  .door_con div .searchRec .searchrec_con .searchrec_list .rec_img{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }
  .door_con div .searchRec .searchrec_con .searchrec_list .rec_img .img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .door_con div .searchRec .searchrec_con .searchrec_list .rec_img .img img{
    height: 100%;
  }

  .door_con div .searchRec .searchrec_con .searchrec_list .searchrec_price{
    font-family: Arial;
    font-size: 12px;
    color: #999;
  }
  .door_con div .searchRec .searchrec_con .searchrec_list .searchrec_desc{
    padding: 11px 0 10px;
    font-size: 12px;
    font-family: \\9ED1\4F53;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .door_con .searchResult{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 1;
    overflow: hidden;
  }
  .door_con .searchResult .sec_result .sec_list{
    height: 44px;
    margin-left: 15px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .door_con .searchResult .sec_result .sec_list::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #f2f2f2;
    content: " ";
  }
  .door_con .searchResult .sec_result .sec_list a{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .door_con .searchResult .sec_result .sec_list a .sec_logo {
    background-image: url("../img/search_ind.png");
    width: 19px;
    height: 19px;
    background-size: 19px 19px;
    background-repeat: no-repeat;
    margin-right: 15px;
  }
  .door_con .searchResult .sec_result .sec_list a .sec_text{
    font-family: \\9ED1\4F53;
    font-size: 14px;
    color: #333;
  }
  .door_con .searchResult .sec_result .sec_list a .jump{
    position: absolute;
    margin-right: 17px;
    font-size: 11px;
    font-family: \\9ED1\4F53;
    right: 17px;
    top: 16.5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }



















  .qux{
    font-family: \\9ED1\4F53;
    font-size: 16px;
    color: #333;
    margin-right: 10px;
  }
</style>
