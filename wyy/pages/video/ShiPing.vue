<template>
<div>
    <div class="router-box">
        <span><router-link active-class="active" to="/ShiPing/ShiPingMv">MV</router-link></span> 
        <span><router-link active-class="active" to="/ShiPing/ShiPingAll">视频</router-link></span> 
    </div>
    <div class="bofang-box">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    export default {
          name:'ShiPing',
          data() {
              return {
              }
          },
          
    }
</script>

<style lang="less" scoped>
div{
    width: 100%;
    height: 100%;
    .router-box{
            top:80px;
            // position: fixed;
            position: absolute;
            height: 100px;
            width: 1067px;
            border-bottom: 1px solid #e0e0e0;
            background-color: white;
            z-index: 1000;
        span{
            position: relative;
            top:30px ;
            margin-left: 30px;
            font-size: 32px;
            a{
                text-decoration: none;
            }
            .active{
                border-bottom: 3px black solid;
            }
            
        };
    }
    .bofang-box{
        margin-top: 100px;
    }
}
</style>
