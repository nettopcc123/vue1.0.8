<template>
<div id="message">
   <h2 class="uitit">站内通知</h2>
   <div class="messge">
    暂无任何信息
    </div>
 </div> 
 </template>
<script>
export default {
  name:'message',
  methods:{

  }
}
</script>
<style>
.messge{
 display: block;
 text-align: center;
 font-size: 0.14rem;
 color: #4a4a4a;
 margin-top:0.2rem
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