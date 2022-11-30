<template lang="">
  <div class="menu-container" :class="isOpen ? 'open' : 'close'">
    <div class="menu">
      <div class="menu-cols flex">
        <div class="col menu-left">
          <div @mouseover="onHover('services')" class="link flex">
            <span class="link-number block">01</span>
            <span class="block">Services</span>
            <div class="border-bottom"></div>
          </div>
          <div @mouseover="onHover('about')" class="link">
            <span class="link-number">02</span>
            <span>About</span>
            <div class="border-bottom"></div>
          </div>
          <div @mouseover="onHover('projects')" class="link">
            <span class="link-number">03</span>
            <span>Projects</span>
            <div class="border-bottom"></div>
          </div>
          <div @mouseover="onHover('contact')" class="link">
            <span class="link-number">04</span>
            <span>Contact</span>
            <div class="border-bottom"></div>
          </div>
          <div class="menu-footer">
            <div> <p class="text-xs">©2022. All Rights Reserved.</p></div>
          </div>
        </div>
        <div class="col menu-right justify-center">
          <div>
            <div class="image-container">
              <div class="image">
                <div class="menu-image" :style="`background-image:url(${require('../../assets/services.png')}`">
                </div>
          </div>
          <div class="slogan-container">
            <h6>We shape innovation,
              <br />collaboration and
              <br/> design built-in</h6>
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
    }
  },
  computed: {
    ...mapGetters("SiteStore", ["isOpen"]),
  },
};
</script>
<style lang="css">
.menu-container {
  position: absolute;
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
  transform: translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  user-select: none;
}

.menu-container.close .col .link span.link-number {
  line-height: inherit;
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
  display: flex;
  width: 35%;
  padding-top: 9vh;
  padding-bottom: 4rem;
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
}

.image-container {
  transform: translate3d(0px, -50vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transition: 0.7s;
}

.menu-container.open .image-container {
  transform: translate3d(0px, 0vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}

.menu-image {
  background-position: center;
  background-size: auto;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  transition: background-image 0.5s;
}

.image {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 22rem;
  height: 38vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 0.3vw;
  background-color: rgba(250, 247, 247, .06);
  transform-style: preserve-3d;
}

.link:hover span {
  color: #121011;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
}

.link-number {
  position: relative;
  top: -12px;
  font-size: max(11px, 1.25vw);
  line-height: 1;
  margin-right: calc(calc(100vw/32)*.8);
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
  opacity: .6;
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
  letter-spacing: -.02em;
}
</style>
