<template>
    <div>
        <h1>收藏歌曲</h1>
         <h3>
            <span>音乐标题</span>
            <span>歌手</span>
        </h3>
        <ol>
               <li v-for="item in choucangValue" :key="item.id">
                   <a @click="playmusicId(item.id,item.songs,item.name)" class="geming">{{item.name}}<a v-show="item.lastname">（{{item.lastname}}）</a></a>
                   <router-link
                        class="songs"
                        :to="{path:'/GeShouXq',
                              query:{
                                  SongsId:item.songsId,
                                  SongsValue:item.name
                                        }
                            }"> 
                                
                    {{item.songs}}
                </router-link>
               </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name:'ShoucanggeQu',
        data() {
            return {
                choucangValue:[]
            }
        },
        methods:{
            playmusicId(musicId,name,musicName){
                var url=`http://music.163.com/song/media/outer/url?id=${musicId}.mp3`
                this.$bus.$emit('getMusicId',url,name,musicName)
            }
        },
        mounted(){
            this.choucangValue=JSON.parse(localStorage.getItem('shoucangList'))
            console.log(this.choucangValue);
        }
    }
</script>

<style lang="less" scoped>
div{
    width: 100%;
    height: 100%;
    h1{
        margin: 50px;
        font-weight: 700;
    }
    h3{
        margin:20px;
        width: 1000px;
        display: flex;
        font-weight: 600;
        :first-child{
              width: 53%;

        }
    }
    ol{
                    margin: 0;
                    padding: 0;
                    width: 1000px;
                    margin-left: 60px;
                    :hover{
                            background-color:#f0f1f2;
                        }
                    li{
                        width: 100%;
                        height: 40px;
                        margin-top: 14px;
                        .geming{
                            font-size: 18px;
                            color: black;
                            text-decoration: none;
                            line-height: 40px;
                            display: inline-block;
                            position: inherit;
                            width: 50%;
                            a{
                                color: #9b9b9b;
                                margin-left: 3px;
                            }
                        }
                        .songs{
                            position: inherit;
                            font-size: 18px;
                            color: black;
                            text-decoration: none;
                            margin-right: 20px;
                        }
                    }
                }
}
</style>
