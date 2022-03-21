<template>
    <div>
        <div class="video-box">
            <p>视频详情</p>
            <video :src="videoUrl" controls></video>
            <br>
            <a>{{this.videoTitle}}</a>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
    name:'videoPlay',
    data() {
        return {
            //视频id
            videodd:0,
            //视频路径
            videoUrl:'',
            //视频标题
            videoTitle:''
        }
    },
    mounted() {
        this.videodd=this.$route.query.videoId
        axios.get(`https://autumnfish.cn/mv/url?id=${this.$route.query.videoId}`).then(
            response=>{
                this.videoUrl=response.data.data.url
                console.log( this.videoUrl);
                

            }
        )
        this.videoTitle=this.$route.query.videoTitle
        
        
    },
}
</script>

<style lang="less" scoped>
.video-box{
    
    p{
        display: block;
        font-size: 30px;
        font-weight:600;
        margin:20px;
    }
    video{
        margin-left: 30px;
        width: 770px;
        height: 440px;
        border-radius: 5px;
    }
    a{
        display: block;
        margin-top: 50px;
        margin-left: 50px;
        font-size: 45px;
        color: black;
        font-weight:500;
        width: 700px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        height: 70px;
        text-decoration: none;
    }
}
    
</style>
