<template>
  <Nav />
  <MenuVue />
  <router-view class="px-11 mt-20" />
  <div class="cursor"></div>
  <!-- <swiper
    :direction="'vertical'"
    :slidesPerView="'auto'"
    :freeMode="true"
    :scrollbar="{
      draggable: true,
      hide:true
    }"
    :mousewheel="true"
    :modules="modules"
    class="mySwiper"
  > -->
    <!-- <swiper-slide> -->
  <MenuVue />
  <router-view class="px-11 mt-20" />
<!-- </swiper-slide> -->
  <!-- </swiper> -->
  
</template>

<script>
import MenuVue from "./components/menu/Menu.vue";
import Nav from "./components/nav/Nav.vue";
import gsap from "gsap";
import "./styles/app.css";

// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import "@/styles/swiper.css";
// import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default {
  name: "App",
  components: {
    Nav,
    MenuVue,
  },
  methods: {
    updateCursor(e) {
      gsap.to(".cursor", 0.6, {
        css: {
          left: e.pageX,
          top: e.pageY
        }
      });
    }
    // SwiperSlide,
    // Swiper,
  },
  setup() {
    return {
      // modules: [FreeMode, Scrollbar, Mousewheel],
    };
  },
  mounted() {
    window.addEventListener('mousemove', this.updateCursor)
  }
};
</script>

<style>
.cursor {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 50%;
  margin: -10px 0px 0px -8px;
  background-color: #fff;
  border-radius: 80%;
  backface-visibility: hidden;
  z-index: 9999;
  mix-blend-mode: difference;
  pointer-events: none;
}
</style>
