<template>
  <div>
    <!-- 此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素 -->
    <audio
      ref="audio"
      @pause="onPause"
      @play="onPlay"
      @timeupdate="handleAudioTimeUpdated"
      @loadedmetadata="onLoadedmetadata"
      src="https://cdn.hyxhbao.com/front/static/h5_hyxhb_img/audio/audio.mp3"
      controls="controls"
      style="display: none"
    ></audio>
    <!-- 音频播放控件 -->
    <div class="p_cotrol">
      <div @click="playaudio">
        <div v-if="audio.playing">
          <img
            class="p_img"
            @click="onPlay()"
            src="https://cdn.hyxhbao.com/front/static/h5_hyxhb_img/audio/pause.png"
            alt=""
          />
        </div>

        <div v-else>
          <img
            class="p_img"
            @click="onPause()"
            src="https://cdn.hyxhbao.com/front/static/h5_hyxhb_img/audio/play.png"
            alt=""
          />
        </div>
      </div>
      <div class="p_time">{{ audio.currentTime | formatSecond }}</div>
      <div class="p_slider" @touchstart="handleTouchStart">
        <div class="p_slider_track"></div>
        <div class="p_slider_fill" :style="'width:' + sliderTime + '%'"></div>
        <div class="p_slider_thumb" :style="'left:' + sliderTime + '%'"></div>
      </div>

      <div class="p_time">{{ audio.maxTime | formatSecond }}</div>
    </div>
  </div>
</template>

<script>
// 将整数转换成 时：分：秒的格式
function realFormatSecond(second) {
  var secondType = typeof second;

  if (secondType === "number" || secondType === "string") {
    second = parseInt(second);

    var hours = Math.floor(second / 3600);
    second = second - hours * 3600;
    var mimute = Math.floor(second / 60);
    second = second - mimute * 60;

    return (
      hours + ":" + ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2)
    );
  } else {
    return "0:00:00";
  }
}
export default {
  name: "jinduriao",

  data() {
    return {
      sliderTime: 0, //滑动进度时间
      audio: {
        playing: false, // 该字段是音频是否处于播放状态的属性
        currentTime: 0, // 音频当前播放时长
        maxTime: 0, // 音频最大播放时长
        minTime: 0,
        step: 0.1,
      },
    };
  },
  watch: {},
  mounted() {
    let audio = document.getElementById("audioPlay");
  },
  methods: {
    // 控制音频的播放与暂停
    playaudio() {
      console.log("控制音频的播放与暂停");
      return this.audio.playing ? this.pause() : this.play();
    },
    // 播放音频
    play() {
      this.$refs.audio.play();
    },
    // 暂停音频
    pause() {
      this.$refs.audio.pause();
      console.log("暂停音频");
    },
    // 音频播放
    onPlay() {
      this.audio.playing = true;
      console.log("音频播放");
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    // 当指定的音频/视频的元数据已加载时，会发生 loadedmetadata 事件。
    onLoadedmetadata(res) {
      console.log("loadedmetadata数据已加载时");
      this.audio.maxTime = parseInt(res.target.duration);
    },
    // 当音频当前时间改变后，进度条也要改变
    handleAudioTimeUpdated(res) {
      console.log("timeupdate");
      // console.log(res.target.currentTime)
      this.audio.currentTime = res.target.currentTime;
      this.sliderTime = parseInt(
        (this.audio.currentTime / this.audio.maxTime) * 100
      );
    },

    // 进度条格式化toolTip
    formatProcessToolTip(index = 0) {
      index = parseInt((this.audio.maxTime / 100) * index);
      return "进度条: " + realFormatSecond(index);
    },
    // touchstart	触摸开始，多点触控，后面的手指同样会触发
    // touchmove	接触点改变，滑动时
    // touchend	触摸结束，手指离开屏幕时
    // touchcancel	触摸被取消，当系统停止跟踪触摸的时候触发
    handleTouchStart(e) {
       console.log(e);
      this.setValue(e.touches[0]);
      document.addEventListener("touchmove", this.handleTouchMove);
      document.addEventListener("touchup", this.handleTouchEnd);
      document.addEventListener("touchend", this.handleTouchEnd);
      document.addEventListener("touchcancel", this.handleTouchEnd);
    },
    handleTouchMove(e) {
      console.log(e.changedTouches[0]);
      this.setValue(e.changedTouches[0]);
    },
    handleTouchEnd(e) {
      this.setValue(e.changedTouches[0]);
      document.removeEventListener("touchmove", this.handleTouchMove);
      document.removeEventListener("touchup", this.handleTouchEnd);
      document.removeEventListener("touchend", this.handleTouchEnd);
      document.removeEventListener("touchcancel", this.handleTouchEnd);
    },
    // 从点击位置更新 value
    setValue(e) {
      // Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
      //clientX  点击位置距离当前body可视区域的x，y坐标
      // console.log(e, this.audio, this.$e);
      const $el = this.$el;
      const { maxTime, minTime, step } = this.audio;
      // console.log($el,'$el.offsetWidth')
      let value =
        ((e.clientX - $el.getBoundingClientRect().left) / $el.offsetWidth) *
        (maxTime - minTime);
      value = Math.round(value / step) * step + minTime;
      value = parseFloat(value.toFixed(5));
      if (value > maxTime) {
        value = maxTime;
      } else if (value < minTime) {
        value = minTime;
      }
      this.$refs.audio.currentTime = value;
    },
    // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
    changeCurrentTime(index) {
      console.log("拖动进度条");
      // console.log('拖动了',index,this.sliderTime,this.audio.maxTime,parseInt(index / 100 * this.audio.maxTime))
      this.$refs.audio.currentTime = parseInt(
        (index / 100) * this.audio.maxTime
      );
    },
  },
  filters: {
    // 将整数转化成时分秒
    formatSecond(second = 0) {
      return realFormatSecond(second);
    },
  },
};
</script>

<style scoped lang="less">
.p_cotrol {
  margin: 0 auto;
  display: flex;
  width: 90%;
  padding: 20px;
  background-color: #fff;
  .p_img {
    width: 30px;
    height: 30px;
  }
  .p_time {
    font-size: 14px;
    line-height: 30px;
    margin: 0 10px;
  }

  // 进度条
  .p_slider {
    width: 100%;
    position: relative;
    height: 24px;
    display: flex;
    align-items: center;
    cursor: default;
    user-select: none;
    outline: none;
  }

  .p_slider_track {
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -1px;
    background-color: #f7e4a5;
  }

  .p_slider_fill {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #ffcd3a;
    left: 0;
    top: 50%;
    margin-top: -1px;
  }

  .p_slider_thumb {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background-color: #ffcd3a;
    color: #ffcd3a;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}
</style>