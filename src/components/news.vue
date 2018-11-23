
<template>
  <div class="newlists" id="newlists">
    <h2 class="itit">极速新闻 <span></span></h2>
   <ul class="smeu">
       <li><router-link :to="{ name: 'newlists1'}">热点新闻</router-link></li>
       <li><router-link :to="{ name: 'newlists2'}">竞技新闻</router-link></li>
       <li><router-link :to="{ name: 'newlists3'}">数字新闻</router-link></li>
    </ul>
    <vue-banner01></vue-banner01>
    <router-view></router-view>
        <div class="infinite-scroll" v-show="loading">
      <svg class="loader-circular" viewBox="25 25 50 50">
        <circle class="loader-path" cx="50" cy="50" r="10" fill="none" stroke="rgb(53, 157, 218)" stroke-width="1"></circle>
      </svg>
      <span class="infinite-scroll-text">{{tips}}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import banner01 from './../components/banner01' 
import newlists from './../components/newlists'
import { setTimeout } from 'timers';
import $ from 'jquery'

export default {
  name: 'user',
  data () {
    return {
      newList:[],
      REQUIRE: true,
      loading: false,
      num:0,
      tips:'努力加载中...',
      url1: '',
      isNewsMenu:false
    }
  },
  components: {
    'vue-banner01':banner01,
    'vue-newlists':newlists,
  }
}
</script>

<style>
.nlist{
  display:block;
  text-align: center;
  text-align: center
}
.nlist li{
  display:block;
  margin-bottom:0.05rem;
  text-align: left;
  font-size: 0.16rem;
  color:#5b5b5b;
  border-bottom:1px dotted #ccc
}
.nlist li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.ntit{
  font-size: 0.14rem;
  color:#303030;
  font-weight: normal
}
.infinite-scroll{
  width: 0.5rem;
  height: 0.2rem;
  margin:0 auto;
}
.nimg img{
  width: 1rem;
  height:0.7rem;
}
.ntime{
    color: #b5b5b5;
    width: 50%;
    text-align: left;
    float:right;
}
.nname{
    width: 50%;
    color: #de4c3a;
    float:right;
}
.ntb{
    display: block;
    clear:both;
    overflow: hidden;
    margin-top:0.08rem;
}
.smeu{
    display: block;
    background:#f9f9f9;
    overflow: hidden;
    line-height: 0.36rem;
    color:#b30101;
}
.smeu li{
    width:33%;
    float:left;
    text-align: center;
    font-size:0.14rem;
}
.smeu li:nth-child(2){
    width:34%;
}
.smeu li a{
    color:#ababab;
    border-bottom:0.01rem solid #f9f9f9;
    display: block;
    clear:both;
    overflow: hidden;
    font-size: 0.14rem;
}
.smeu .router-link-active{
    color:#b30101;
    border-bottom:0.01rem solid #b30101;
}
.vrw {
    height: 96%!important;
}
.itit{
   background:#b30101;
   color:#fff;
   line-height: 0.4rem;
   border-left: 0.03rem solid #b30101;
}
</style>

