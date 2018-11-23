<template>
<div id="no404">
    <h2 class="itit">404</h2>
    <div class="favors">
     401
    </div>
 </div> 
 </template>
<script>

import axios from 'axios'
export default {
  name:'404',
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