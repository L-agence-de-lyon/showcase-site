<template>
   <swiper
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
  >
    <swiper-slide>
  <Nav />
  <MenuVue />
  <router-view class="px-11 mt-20" />
</swiper-slide>
  </swiper>
  
</template>

<script>
import MenuVue from "./components/menu/Menu.vue";
import Nav from "./components/nav/Nav.vue";
import "./styles/app.css";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "@/styles/swiper.css";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default {
  name: "App",
  components: {
    Nav,
    MenuVue,
    SwiperSlide,
    Swiper,
  },
  setup() {
    return {
      modules: [FreeMode, Scrollbar, Mousewheel],
    };
  },
};
</script>

<style></style>
