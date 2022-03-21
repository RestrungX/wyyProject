<template>
    <div>
        123
    </div>
</template>

<script>
import axios from 'axios'

        export default {
             name:'GeDanxq',
             data() {
                 return {
                     
                 }
             },
             mounted(){
                 axios.get(`https://autumnfish.cn/playlist/track/all?id=24381616&limit=10`).then(
                     response=>{
                         console.log(response.data);
                     }
                 )
             }
        }
</script>

<style scoped>

</style>
