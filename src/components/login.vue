<template>
<div id="login">
    <h2 class="itit">登入</h2>
    <div class="favors">
     你还没有收藏任何数据呢，去看看吧
    </div>
 </div> 
 </template>
<script>

import axios from 'axios'
export default {
  name:'login',
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
</style>