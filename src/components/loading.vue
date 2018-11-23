 <template>
    <div>
       <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>    
    </div>
 </template>
  <script>
  import { VueLoading } from 'vue-loading-template'
  import newlists from './../components/newlists'
  import router from './../router';



  export default {
    name: 'app',
    components: {
      VueLoading
    }
  }

  

  </script>

<style>
.showload{
    position:fixed;
    left:50%;
    top:50%;
    z-index: 100;
    height:0.5rem;
    width:0.5rem;
    margin-left:-0.25rem;
    margin-top:-0.25rem;
    background:#fff;
    border-radius:0.05rem;
    text-align: center;
}
</style>

