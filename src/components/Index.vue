
<template>
  <div class="hello">
       <!-- <button @click="isloadshow">+</button>
        <button @click="isloadhid">-</button> -->
    <vue-banner></vue-banner>
    <vue-newlists></vue-newlists>
  </div>
</template>
<script>
import axios from 'axios'
import banner from './../components/banner' 
import newlists from './../components/newlists'


export default {
  name: 'Index',
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
          isloadshow() {
            this.$store.commit('isload');
          },
          isloadhid() {
            this.$store.commit('isloadhid');
          }
  }
}


</script>