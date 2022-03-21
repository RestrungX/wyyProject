<template>
    <el-row class="demo-autocomplete">
   <el-input
    placeholder="请输入内容"
    v-model="serchValue">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
  <el-button type="primary" round icon="el-icon-search" @click="servalue">搜索</el-button>
  
</el-row>
</template>
<script>
 import axios from 'axios'
  export default {
    name:'ceshi',
    data() {
      return {
        serchValue:[]
         };
    },
    methods: {
      servalue(){
        this.serchValue.forEach(e => {
         console.log(e.name);
       });
      },
      loadAll() {
        let a= [{"value":''}]
          this.serchValue.forEach(e => {
            a.push({"value":e.name})
       });
        return a
      },
     
    },
    beforeUpdate() {
      this.restaurants = this.loadAll();
      axios.get(`https://autumnfish.cn/search?keywords=${this.state1}`).then(
           response=>{
              this.serchValue=response.data.result.songs
              // console.log('##',this.serchValue);
           },
         )
         
    }
  }
</script>