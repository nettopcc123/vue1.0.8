<template>
<div id="lotts">
       <h2 class="itit">开奖信息 <span></span></h2>
        <ul class="nlist">
            <li v-for="(value,key) in lottslist">
            <div v-if="key == $route.params.lottsId">
                <div v-for="(v,k) in morlotts">
                    {{ v.expect }}
                    {{ v.opencode }}
                    {{ v.opentime }}
                    {{ v.opentimestamp }}
                </div>
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
      morlotts:[]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
         this.newVue();
    })
  },
  methods: {
        newVue:function(){
            axios.get('/static/lotts.json')  //http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
                this.lottslist = res.data;
                for(let k in this.lottslist){
                    this.morlotts = this.lottslist[k].data;
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
  }
}
</script>
