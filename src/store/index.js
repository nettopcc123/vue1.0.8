
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//定义一个状态管理容器

const store = new Vuex.Store({
 state: {
    isload:false,
    isalert:false,
    loading:false,
    user:''
 },
 mutations: {
   isloadhid(state){
    state.isload = false;
   },
   isloadshow(state){
     state.isload = true;
   },
   isalertshow(state){
    state.isalert = true;
   },
   isalerthid(state){
     state.isalert = false
   }
}
});

export default store
