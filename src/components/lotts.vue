<template>
<div id="lotts">
       <h2 class="uitit">开奖信息 <span></span></h2>
        <ul class="llist">
            <li v-for="(value, key) in lottslist" >
                <div class="limg">
                    <img :src="require('./../components/img/'+ value.img)">
                </div>
                <div class="lcon">
                    <p class="loct"><span class="cname">双色球</span><span class="cperiod">第18107期</span><span class="ctime">开09-13周四</span><span class="clear"></span></p>
                    <p class="locb"><span>01</span> <span>02</span> <span>05</span><span class="clear"></span></p>
                </div>
            </li>
        </ul>
 </div> 
 </template>

<script>
import axios from 'axios'
export default {
  name: 'lotts',
  data () {
    return {
      lottslist:[],
    }
  },
  mounted: function () {
    this.$nextTick(function () {
         this.newVue();
    })
  },
  methods: {
        newVue:function(){
            var url=window.encodeURIComponent("http://154.48.238.35:8081/api/rd?rdurl=http://f.apiplus.net/dlt.json");
            axios.get('/static/lotts.json')  //http://10.20.20.182:8083/api/rd   http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
                console.log(res.data);
                this.lottslist = res.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
  }
}
</script>
<style>
.llist{
    display: block;
    overflow: hidden;
    margin-top:0.05rem;
}
.llist li{
    display: block;
    margin-bottom:0.08rem;
    clear: both;
    overflow: hidden;
    padding:0px 0.1rem;
}
.llist li .loct{
    display: block;
    clear:both;
    overflow: hidden;
}
.llist li .locb{
    display: block;
    clear:both;
    margin-top:0.08rem;
    height: 0.08rem;
}
.llist li .locb span{
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.2rem;
    background-color: #efefef;
    border: 0.01rem #a72525 solid;
    border-radius: 0.1rem;
    float:left;
    margin-right:0.05rem;
    text-align: center
}
.limg{
  width: 25%;
  float: left
}
.lcon{
  width: 70%;
  float: right
}
.cname{
    float:left;
    width: 20%;
    color:#f00;
}
.cperiod{
    float:left;
    width: 30%;
    color:#32312f;
}
.ctime{
    float:left;
    width: 30%;
    color:#373332;
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
