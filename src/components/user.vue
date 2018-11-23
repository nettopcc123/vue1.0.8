
<template>
  <div class="user">
    <h2 class="uitit">用户中心</h2>
      <ul class="uselis">
         <li><router-link :to="{name:'feedback'}" class="userouter">意见反馈<i class="iconfont icon-next usenext"></i></router-link></li>
         <li><router-link :to="{name:'disclaimer'}" class="userouter">免责声明<i class="iconfont icon-next usenext"></i></router-link></li>
         <li><router-link :to="{name:'message'}" class="userouter">站内通知<i class="iconfont icon-next usenext"></i></router-link></li>
         <li><router-link :to="{name:'favorites'}" class="userouter">我的收藏<i class="iconfont icon-next usenext"></i></router-link></li>
         <li @click="isloadshow" class="userouter">清除缓存<i class="iconfont icon-next usenext"></i></li>
     </ul>
  </div>
</template>
<script>
import axios from 'axios'
import banner from './../components/banner' 
import newlists from './../components/newlists'
import { setTimeout } from 'timers';



export default {
  name: 'user',
  data () {
    return {
      newList:[],
      count:0,
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
      isalertshow() {
        this.$store.commit('isalertshow');
      },
      isalerthid() {
        this.$store.commit('isalerthid');
      },
      isloadshow() {
        this.$store.commit('isloadshow');
          setTimeout(()=>{
            this.isloadhid();
            this.$toast.center('清除成功');
          },2000)
      },
      isloadhid() {
        this.$store.commit('isloadhid');
      }
  }
}
</script>

<style>
.user{
  text-align: center
}
.uselis{
  display:block;
  text-align: center;
  margin: 0.1rem auto;
  text-align: center
}
.uselis li{
  display:block;
  line-height: 0.4rem;
  margin-bottom:0.05rem;
  text-align: left;
  padding:0 0.2rem;
  border-bottom: 0.01rem solid #e9e9e9;
  font-size: 0.16rem;
  color:#5b5b5b
}
.uselis li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.usenext{
  float:right;
}
.userouter{
  display: block
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
