<template>
    <div>
        <p>歌手</p>
        <div class="yuzhongfl">
            <ul>
            语种:
                <li v-for="(item,index) in area" :key="item.id" 
                        :class="{active:index===listactive}"
                        @click.passive="ceshi(item.area,index)">

                        <a
                        
                        >{{item.name}}
                         </a>
                </li>
            </ul>
        </div>
        <div class="yuzhongfl">
            <ul>
            分类:
                <li v-for="(item,index) in type" :key="item.id"
                        :class="{active:index===typeactive}"
                        @click.passive="ceshi2(item.types,index)">
                     <a>{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="zhanshi">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
    name:'GeShou',
    data() {
        return {
            listactive:0,
            typeactive:0,
            SongsType:{area:'-1',types:'-1'},
            area:[
                {id:'01',name:'全部',area:-1},
                {id:'02',name:'华语',area:7},
                {id:'03',name:'欧美',area:96},
                {id:'04',name:'日本',area:8},
                {id:'05',name:'韩国',area:16},
                {id:'06',name:'其他',area:0}
                ],
            type:[
                 {id:'01',name:'全部',types:-1},
                {id:'02',name:'男歌手',types:1},
                {id:'03',name:'女歌手',types:2},
                {id:'04',name:'乐队组合',types:3},
            ]
        }

    },
    watch: { 
        // SongsType:{
        //         immediate:true,
        //         deep:true,
        //         handler(news) { 
        //             this.SongsType.area=news.area
        //             this.SongsType.types=news.types
        // } 
    //  },
        },
    methods:{
        ceshi(area,index){
            this.listactive=index
            this.SongsType.area=area
            this.$router.push({ name: 'SongsFenlei',query:{types:this.SongsType.types,area:area}})

        },
        ceshi2(type,index){
            this.typeactive=index
            this.SongsType.types=type
            this.$router.push({ name: 'SongsFenlei',query:{types:type,area:this.SongsType.area}})

            //  console.log(type,index);       
        }
    }
    }
    
    
</script>

<style lang='less' scoped>
div{
    
    p{
        font-size: 32px;
        margin: 60px;
        font-weight: 500;
    }
    div{
        font-size: 14px;
      .yuzhongfl{
        height: 20px;
        width: 100%;
        margin-top: 30px;
        ul{
            margin: 0;
            padding: 0;
            display: flex;
            margin-left: 20px;
            .active{
                    background-color:#409eff;
                    border-radius: 8px;
                    color: black;
                }
            li{
                width: auto;
                margin: 20px;
                margin-top: 0;
                list-style:none;
                cursor:pointer;

                :hover{
                    font-weight: 400;
                }
                
                a{
                    margin: 8px;
                    margin-top: 5px;
                    height: 15px;
                    display: block;
                    font-size: 14px;
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
    
    }
   
}
</style>
