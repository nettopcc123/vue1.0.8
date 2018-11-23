<template>
<div id="newsMore">
       <h2 class="itit">彩市头条</h2>
       <div v-for="(value, key) in newList">
           <div v-if="key == $route.params.userId" class="newsmore">
                <h3 >{{ value.text }}</h3>
                <div class="newsmore">{{ value.top_commentsContent }}</div>
           </div>
       </div>
 </div> 
 </template>
<script>
import axios from 'axios'
export default {
  name: 'newsMore',
  data () {
    return {
      newList:[],
    }
  },
  mounted: function () {
    this.$nextTick(function(){
        this.newVue();
        console.log('bbb');
        console.log(this.$route.params.userId)
    })
  },
  methods: {
        newVue:function(){
            axios.get('https://www.apiopen.top/satinGodApi?type=1&page='+ this.$route.params.page)
            .then(res => {
              console.log(this.$route.params.page)
                this.newList = res.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
  }
}
</script>

<style>
.newtit{
  width: 96%;
  margin:0.1rem 2%;
  font-size: 0.14rem;
  color:#1a1a1a
}
.newsmore{
  display: block;
  text-align: left;
  width: 96%;
  margin:0 2%;
  color:#3e3e3e;
  line-height: 0.22rem;
}
</style>