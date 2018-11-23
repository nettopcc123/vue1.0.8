<template>
<div id="alert">
    <div class="atit">{{ title }}</div>
    <div class="acon">{{ conent }}</div>
    <div class="abut"><button class="bconsl">取消</button><button class="bdel">删除</button></div>
 </div> 
 </template>
<script>
import axios from 'axios'
import banner from './../components/banner' 
import newlists from './../components/newlists'


export default {
  name: 'alert',
  data () {
    return {
      newList:[],
      count:0,
      title:'提示信息aaa',
      conent: '确定要删除'
    }
  },
  computed:{
    num(){
      return this.$store.state.count;
    }
  },
  components: {
    'vue-banner':banner,
    'vue-newlists':newlists,
  },
  methods:{
          isalertshow(title,conent,stat) {
            this.$store.commit('isalertshow');
          },
          isalerthid() {
            this.$store.commit('isalerthid');
          }
  }
}


</script>


<style>
.showalert{
    position:fixed;
    left:50%;
    top:50%;
    z-index: 100;
    height:1.8rem;
    width:3rem;
    margin-left:-1.5rem;
    margin-top:-0.7rem;
    background:#fff;
    border-radius:0.05rem;
    text-align: center;
}
.abut{
  display: block;
  width: 90%;
  margin:0 auto;
  position: absolute;
  bottom:10px;
  left:5%
}
.bconsl{
  width: 1.2rem;
  float:left;
}
.bdel{
  width: 1.2rem;
  float:right;
}
</style>
