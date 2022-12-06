<template lang="">
  <div class="menu-container" :class="isOpen ? 'open' : 'close'">
    <div class="backdrop"></div>
    <div class="menu">
      <div class="menu-cols flex overflow-auto">
        <div class="col menu-left">
          <div @mouseover="onHover('progressive')" class="link flex">
            <span class="link-number block">01</span>
            <span class="block">Services</span>
            <div class="border-bottom"></div>
            <div class="link-hover"></div>
          </div>
          <div @mouseover="onHover('about')" class="link">
            <span class="link-number">02</span>
            <span>À-propos</span>
            <div class="border-bottom"></div>
          </div>
          <div @mouseover="onHover('projects')" class="link">
            <span class="link-number">03</span>
            <span>Projets</span>
            <div class="border-bottom"></div>
          </div>
          <div
            @click="changeRouter('contact')"
            @mouseover="onHover('contact')"
            class="link"
          >
            <span class="link-number">04</span>
            <span>Contact</span>
            <div class="border-bottom"></div>
          </div>
          <div class="menu-footer">
            <div><p class="text-xs">©2022. All Rights Reserved.</p></div>
          </div>
        </div>
        <div class="col menu-right justify-center">
          <div class="h-full">
            <div class="image-container h-full">
              <div class="image">
                <div class="menu-image" :style="`background-image:url(${require('../../assets/svg/progressive.svg')}`">
                </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-bg"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { imageChangeOnMouseHover } from "../../functions/imageChangeOnMouseHover";

export default {
  name: "Menu",
  methods: {
    ...mapMutations("SiteStore", ["handleDrawer"]),
    onHover(src) {
      imageChangeOnMouseHover(src);
    },
    changeRouter(route) {
      this.handleDrawer();
      this.$router.push(route);
    },
  },
  computed: {
    ...mapGetters("SiteStore", ["isOpen"]),
  },
};
</script>
<style lang="css">
.menu-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding-top: 78px;
  padding-bottom: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  pointer-events: none;
  z-index: 23;
  user-select: none;
  pointer-events: none;
}

.menu {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 97.7vw;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 0.5vw;
}

.menu-cols .col {
  position: relative;
  z-index: 2;
  color: white;
}

.col .link {
  padding-top: 1rem;
  padding-right: 1vw;
  padding-bottom: 3rem;
  color: #d5d0ca;
  font-size: 11vh;
  line-height: 11vh;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  user-select: none;
}

.col .link span {
  transform: translate3d(0px, 160%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  user-select: none;
}

.menu-container.close .col .link span.link-number {
  line-height: inherit;
}

.menu-container.close .col .link span.link-number {
  line-height: inherit;
  opacity: 0;
}

.menu-container.open .col .link span.link-number {
  opacity: 1;
}

.menu-container.open .col .link span {
  transition: 1.2s;
}

.menu-container.close .col .link span {
  transition: 0.3s;
}

.menu-container.open .menu .menu-cols .col .link span {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}

.menu-container.open .menu .menu-cols .col .link .border-bottom {
  width: 100%;
  transition: 0.7s;
}

.menu-container.close .menu .menu-cols .col .link .border-bottom {
  transition: 0.5s;
}

.col .link .border-bottom {
  width: 0%;
  height: 1px;
  position: absolute;
  left: 0;
  top: auto;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: rgba(213, 208, 202, 0.2);
}

.menu-left {
  position: relative;
  width: 65%;
  padding: 4rem 9rem 4rem 4rem;
}

.menu-right {
  width: 35%;
}

.menu-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #121011;
  transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  pointer-events: none;
  transition: 0.7s;
}

.menu-container.open .menu {
  pointer-events: all;
}

.menu-container.open .menu-bg {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}

.menu-container.open {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  will-change: transform;
  pointer-events: all;
}

.menu-image {
  background-position: left;
  background-size: auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  transition: background-image 0.5s;
}

.image-container {
  transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transition: 0.7s;
}

.menu-container.open .image-container {
  transform: translate3d(0px, 0vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}

.image {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.link:hover span {
  color: #121011;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
  transition: 0.2s !important;
}

.link-number {
  position: relative;
  top: -12px;
  font-size: max(11px, 1.25vw);
  line-height: 1;
  margin-right: calc(calc(100vw / 32) * 0.8);
}

.menu-footer {
  z-index: 3;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-right: 2rem;
  padding-bottom: 4rem;
  padding-top: 1.8rem;
  padding-left: 2rem;
  opacity: 0.6;
}

.slogan-container {
  margin-top: 2rem;
}

.slogan-container h6 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 35px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.menu-container .backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  user-select: none;
  touch-action: none;
  pointer-events: none;
  opacity: 0;
  transition: 0.5s;
}

.menu-container.close .backdrop {
  transition: 0.5s;
}

.menu-container.open .backdrop {
  opacity: 1;
}

.menu-container .menu-cols {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.menu-container .menu-cols::-webkit-scrollbar {
  display: none;
}
</style>
