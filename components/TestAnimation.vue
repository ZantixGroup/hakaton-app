<template>
  <div>
    <div style="width: 400px;">
      <div style="width: 20px; height: 20px; background-color: blue;" class="el"></div>
      <input ref="obj" class="progress" step="0.01" type="range" min="0" max="100" value="0" />
    </div>
  </div>
</template>
<script>
import anime from 'animejs';

export default {
  name: 'TestAnimation',
  mounted(){
    this.$nextTick(()=>{
      setTimeout(() => {
        var animation = anime({
        targets: '.el',
        translateX: 270,
        delay: function(el, i) { return i * 100; },
        elasticity: 200,
        easing: 'easeInOutSine',
        autoplay: false
      });
      // this.$refs.obj.innerHTML

      var seekProgressEl = document.querySelector('.progress');
      seekProgressEl.oninput = function() {
        animation.seek(animation.duration * (seekProgressEl.value / 100));
      };
      }, 300);
      
    })
  }
}
</script>