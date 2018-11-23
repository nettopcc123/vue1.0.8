<template>
<div id="favorites">
    <h2 class="uitit">我的收藏</h2>
    <div class="favors">
     你还没有收藏任何数据呢，去看看吧
    </div>
 </div> 
 </template>
<script>

import axios from 'axios'
export default {
  name:'favorites',
  data(){
    return {
      weather:[],
    }
  },
  mounted:function(){
    this.$nextTick(function(){
     
    })
  },
  methods:{
  }
}
</script>
<style>
.favors{
 display: block;
 text-align: center;
 font-size: 0.14rem;
 color: #4a4a4a;
 margin-top:0.2rem
}
.uitit{
    display: block;
    line-height: 0.36rem!important;
    border-left: 0.03rem solid #b30101!important;
    padding-left:0.15rem;
    font-size: 0.18rem;
    text-align: left;
    background:#fff!important;
}
</style>