<template>
<div>
    <div class="top">
        <img :src="SongsValue.cover" alt="">
        <span>
            <h1>{{SongsValue.name}}</h1>
            <h3>{{$route.query.SongsLastName}}</h3>
            <div class="xq">
                <a>单曲数{{SongsValue.musicSize}}</a>
                <a>专辑数:{{SongsValue.albumSize}}</a>
                <a>MV数:{{SongsValue.mvSize}}</a>
            </div>
        </span>
    </div>
    <div class="fenlei">
        <router-link active-class="active"  :to="{path:'/GeShouXq/GeShouDq',query:{SongsId:SongsId}}">单曲</router-link>
        <router-link active-class="active"  :to="{path:'/GeShouXq/GeShouMv',query:{SongsId:SongsId}}">MV</router-link>
        <router-link active-class="active"  :to="{path:'/GeShouXq/GeShouJs',query:{SongsId:SongsId,SongsValue:SongsValue.name}}">歌手详情</router-link>
    </div>
     <keep-alive>
                <router-view replace></router-view>
     </keep-alive>
</div>
</template>

<script> 
    import axios from 'axios'
    export default {
         name:'GeShouXq',
         data() {
             return {
                 SongsValue:[],
                 SongsId:''
             }
         },
         mounted(){
             //获取此时的歌手id
             this.SongsId=this.$route.query.SongsId
             axios.get(`https://autumnfish.cn/artist/detail?id=${this.SongsId}`).then(
                 response=>{
                     this.SongsValue=response.data.data.artist

                 }
             )
            
                 
         }
    }
    
</script>

<style lang="less" scoped>
div{
        .top{
        display: flex;

        img{
            width: 280px;
            height:280px;
            border-radius: 8px;
            margin-left: 50px;
            margin-top: 50px;
        }
        span{
            height: 200px;
            width: 500px;
            margin-top: 100px;
            margin-left: 40px;
            h3{
                color: #5f5f5f;
            }
            a{
                text-decoration: none;
                color: black;
                display: inline-block;
                margin-right: 30px;
                font-size: 18px;
            }
            .xq{
                margin-top: 50px;
            }
        }

    }
    .fenlei{
        display: flex;
        margin-left: 32px;
        height: 20px;
        margin-bottom: 50px;
         .active{
            border-bottom:4px solid #409eff ;
            font-weight: 700;
            }
         a{
             font-size:23px ;
             line-height: 80px;
             margin-left: 30px;
             color: black;
             text-decoration: none;
             height: auto;
             
         }   
            
            
        
    }
    .zhanshi{
        width: 100%;
        height: auto;
    }
}

</style>
