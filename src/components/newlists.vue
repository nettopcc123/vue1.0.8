
<template>
  <div class="newlists" id="newlists">
    <h2 class="itit">彩市头条 <span><router-link to="/newlists">更多>></router-link></span></h2>
        <ul class="nlist">
            <li v-for="(value, key) in newList">
                <router-link :to="{ name: 'newsMore', params: { userId: key , page: num}}">
                <span class="nimg"><img v-bind:src="value.image" ></span>
                <span class="newsCtn">
                    <h2 class="ntit">{{ value.text | filter }}</h2>
                    <p>{{ value.content }}</p>
                    <i class="mark2">{{ value.username }}</i>
                </span>
                </router-link>
            </li>
        </ul>
  </div>
</template>
<script>

import axios from 'axios'
import banner from './../components/banner' 
import newlists from './../components/newlists'
import { setTimeout } from 'timers';
import $ from 'jquery'


export default {
  name: 'user',
  data () {
    return {
      newList:[],
      REQUIRE: true,
      loading: false,
      num:0,
      tips:'努力加载中...',
      url1: '',
    }
  },
  created: function(){
    this.newVue(this.num);
  },
  mounted: function () {
    this.$nextTick(() => {//在下次 DOM 更新循环结束之后执行延迟回调
          document.getElementById('vrw').addEventListener('scroll',this.scrollBottom);
          this.url1 = 'https://m.sporttery.cn/app/zf/fb/livelist.html'
    })
  },
  filters:{
    filter:function(value){
        if (!value) return '';
        if (value.length > 8) {
          return value.slice(0,8) + '...'
        }
        return value
    }
  },
  computed:{
    num01:function (){
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
           // this.$toast.center('清除成功');
          },2000)
      },
      isloadhid() {
        this.$store.commit('isloadhid');
      },
      newVue:function(num){
        axios.interceptors.request.use(config => {  
          this.isloadshow();      
             console.log('1')
            return config;
          }, function (error) {
            // 对请求错误做些什么
            console.log('2')
            return Promise.reject(error);
          });

        // 添加响应拦截器
        axios.interceptors.response.use(response => {
            // 对响应数据做点什么
            console.log('a3')
            this.isloadhid();  
            this.isloadhid;
           // this.$store.commit('isloadhid');
            return response;
          }, function (error) {
            console.log('4')
            // 对响应错误做点什么
            return Promise.reject(error);
          });
            axios.get('https://www.apiopen.top/satinGodApi?type=1&page=' + num)  /// http://www.hd.me/data.php?callback=dosomething    static/news.json?num  static/news.json  http://misc.opencai.net/consts/lotts.json   /static/news.json
            .then(res => {
              console.log(typeof(res));
             // res = JSON.parse(JSON.stringify(res.data));
              console.log(res);
              res.data.data.forEach(v => {
                this.newList.push(v);
              });
              if( num >= 3){
                this.tips = '加载完成';
                return;
              }
            })
            .catch(error => {
                console.log(error);
                this.REQUIRE = false;
            });
        },
        scrollBottom:function(){

          if( (($('#vrw').scrollTop() + (window.screen.height)) >  $('#newlists').height()) && this.REQUIRE == true && this.num <= 4 ){
              this.REQUIRE = false;
              this.loading = true;
              this.tips = '正在加载中';
              this.newVue(this.num);
              this.$nextTick(() => {
                this.REQUIRE = true;
                this.loading = false;
                this.num ++;
              })
          }else{
            this.loading = true;
          }
        }
  }
}
</script>

<style scoped>
.nlist{
  display:block;
  text-align: center;
  text-align: center
}
.nlist li{
  display:block;
  margin-bottom:0.05rem;
  text-align: left;
  font-size: 0.16rem;
  color:#5b5b5b
}
.nlist li a{
  font-size: 0.16rem;
  color:#5b5b5b
}
.ntit{
  font-size: 0.14rem;
  color:#303030
}
.infinite-scroll{
  width: 0.5rem;
  height: 0.2rem;
  margin:0 auto;
}
.nimg img{
  width: 1rem;
  height:1rem;
}
</style>

