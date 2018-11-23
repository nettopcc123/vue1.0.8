<template>
<div id="newsMore">
       <h2 class="itit">极速新闻</h2>
       <div v-html="newList.A_Content" class="ccon">
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
      articid : this.$route.params.articid
    }
  },
  mounted: function () {
    this.$nextTick(function(){
        this.newVue()
        console.log('bbb');
        console.log(this.$route.params.articid)
    })
  },
  methods: {
        newVue:function(){
            axios.get('https://ttcapi1.ttc178.com/api/sitemsg/getaricledetail?c=1&v=1.0&t=1540461828&tk=&p=main&articleid='+ this.articid +'&s=356bf09cf72510da099a92455b995591')
            .then(res => {
                this.newList = res.data.models;
                console.log(this.newList);
                
            })
            .catch(error => {
                console.log(error);
            });
        }
  }
}
</script>

<style>
.ccon{
  width: 3.4rem;
  margin: 0 auto;
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
