<template>
<div>
    <div class="top">
        <div class="rm">
            <div class="top50">
                <P class="p1">
                    TOP
                </P>
                <p class="p2">
                    50
                </p>
            </div>
        </div>
        
        <ol>
               <li v-for="item in musicValue10" :key="item.id">
                   <a @click="playmusicId(item.id,item.ar[0].name,item.name)">{{item.name}}<a v-show="item.alia[0]">（{{item.alia[0]}}）</a></a>
                   <a href=""
                        @click.prevent="shoucang(item.name,item.alia[0],item.ar[0].name,item.id,$event,item.ar[0].id)">
                         <el-tooltip class="item" effect="dark" content="收藏" placement="top-start">
                            <i class="el-icon-star-off" ></i>
                         </el-tooltip>
                        
                   </a>

               </li>
               <div  v-show="show" class="show40">
                <a @click.prevent="show = !show">查看全部50首></a>
               </div>
               <li v-for="item in musicValue40" :key="item.id" v-show="!show">
                   <a @click="playmusicId(item.id,item.ar[0].name)">{{item.name}}<a v-show="item.alia[0]">（{{item.alia[0]}}</a></a>
                   <a
                    @click.prevent="shoucang(item.name,item.alia[0],item.ar[0].name,item.id,$event,item.ar[0].id)"
                   >    
                        <i class="el-icon-star-off" ></i>
                   </a>
               </li>
        </ol>
        
    </div>
        
</div>
</template>

<script> 
    import axios from 'axios'
    export default {
         name:'GeShouDq',
         data() {
             return {
                 musicValue10:[],
                 musicValue40:[],
                 show:true,
             }
         },
         methods:{
             shoucang(name,lastname,songs,id,event,songsId){
                  const el =event.target
                
                 if(el.className==="el-icon-star-off"){
                     //收藏歌曲
                      console.log(event.target);
                     
                  let value={id,songsId,name,lastname,songs}
                   el.className = "el-icon-star-on";
                   el.style.color="red"
                  if (!localStorage.getItem("shoucangList")) {
                        //没有,就设置数组，但是字符串类型
                        localStorage.setItem("shoucangList", "[]");
                    } else {
                        //之前有存储，就获取
                        this.shoucangList = JSON.parse(localStorage.getItem("shoucangList"));
                    }
                     this.shoucangList.unshift(value)
                    //数组对象去重
                    var hash = {};
                    this.shoucangList = this.shoucangList.reduce(function(item, next) {
                        hash[next.id] ? '' : hash[next.id] = true && item.push(next);
                        return item
                    }, [])
                     localStorage.setItem("shoucangList", JSON.stringify(Array.from(this.shoucangList)));

                 }else{
                     //取消收藏歌曲
                      el.className = "el-icon-star-off";
                      el.style.color="black"
                      //判断本地存储里面是否存在，返回与点击id值不相同的并本地保存
                     this.shoucangList= this.shoucangList.filter(item => {
                        //   console.log(item.id!=id);
                        if(item.id!=id){
                            return item
                        }
                      });
                       localStorage.setItem("shoucangList", JSON.stringify(Array.from(this.shoucangList)));
                 }
                

             },
            //  bijiao(){
            //         var array1 = JSON.parse(localStorage.getItem('shoucangList'));
            //         var array2 =this.musicValue10;
            //         var result = [];
            //         for(var i = 0; i < array2.length; i++){
            //             var obj = array2[i];
            //             var num = obj.Num;
            //             var isExist = false;
            //             for(var j = 0; j < array1.length; j++){
            //                 var aj = array1[j];
            //                 var n = aj.Num;
            //                 if(n == num){
            //                     isExist = true;
            //                     break;
            //                 }
            //             }
            //             if(!isExist){
            //                 result.push(obj);
            //             }
            //         }
            //         console.log(result);
            //  }
            playmusicId(musicId,name,musicName){
                var url=`http://music.163.com/song/media/outer/url?id=${musicId}.mp3`
                this.$bus.$emit('getMusicId',url,name,musicName,musicId)
               
            }
         },
       
         mounted(){
             axios.get(`https://autumnfish.cn/artist/top/song?id=${this.$route.query.SongsId}`).then(
                 response=>{
                     let value=response.data.songs
                     //给所有数组对象增加一个属性
                    //  let newvalue=[]
                    //  value.map((item)=>{
                    //     newvalue.push(
                    //         Object.assign(item,{shoucangactive:false})
                    //         )
                    //     });
                     this.musicValue10=value.slice(0,10)
                     this.musicValue40=value.slice(10,50)
                     
                 }
             )
            
           
         },
    }
    
</script>

<style lang="less" scoped>
.top{
    width: 100%;
    display: flex;
      .rm{
            width:20%;
            .top50{
                background-color: #47494e;
                border-radius: 8px;
                margin-top: 50px;
                margin-left: 20px;
                float: left;
                width: 200px;
                height: 200px;
                text-align: center;
                .p1{
                    text-align: center;
                    line-height: 55px;
                    font-size: 55px;
                    color: white;
                    font-weight: 800;
                }
                 .p2{
                    line-height: 1px;
                    font-size: 90px;
                    color: white;
                    font-weight: 900;
                }
               
            }
               
       
         p{
                    margin-top: 34px;
                }    
        }
         ol{
                    float: right;
                    margin: 0;
                    padding: 0;
                    width: 80%;
                    margin-left: 60px;
                    :hover{
                            background-color:#f0f1f2;
                        }
                    .show40{
                        width: 700px;
                        height: 40px;
                        :hover{
                                color: rgb(131, 131, 131);
                            }
                        a{
                            display: block;
                            float: right;
                            font-size: 13px;
                            width: 100px;
                            height: 100%;
                            color: #9b9b9b;
                            text-decoration: none;
                        }
                        
                    }
                    li{
                        margin-right: 40px;
                        width: 700px;
                        height: 40px;
                        margin-top: 14px;
                        cursor:pointer;
                        
                        a{
                            font-size: 18px;
                            color: black;
                            text-decoration: none;
                            line-height: 40px;
                            a{
                                color: #9b9b9b;
                                margin-left: 3px;
                            }
                        }
                        i{
                            float: right;
                            margin-right: 0px;
                            font-size: 23px;
                            line-height: 41px;
                            
                        }
                    }
                }
}
   
</style>
