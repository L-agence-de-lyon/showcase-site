<template lang="">
  <div class="menu-container" :class="isOpen ? 'open' : 'close'">
    <div class="menu">
      <div class="menu-cols flex">
        <div class="col menu-left">
          <div class="link">
            <span class="block">Services</span>
            <div class="border-bottom"></div>
          </div>
          <div class="link">
            <span class="block">About</span>
            <div class="border-bottom"></div>
          </div>
          <div class="link">
            <span class="block">Projects</span>
            <div class="border-bottom"></div>
          </div>
          <div class="link">
            <span class="block">Contact</span>
            <div class="border-bottom"></div>
          </div>
          <div class="menu-footer"></div>
        </div>
        <div class="col menu-right">
          <!-- <img
            class="object-contain"
            src="../../assets/casual-life-3d-man-chatting-on-dating-site.png"
          /> -->
        </div>
      </div>
      <div class="menu-bg"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Menu",
  methods: {
    ...mapMutations("SiteStore", ["handleDrawer"]),
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
  display: block;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  display: inline-block;
}

.col .link span {
  transform: translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.menu-container.open .col .link span {
  transition: 1.2s;
}

.menu-container.close .col .link span {
  transition: 0.3s;
}

.menu-container.open .menu .menu-cols .col .link span {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
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
  transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  pointer-events: none;
  transition: 0.7s;
}
.menu-container.open .menu {
  pointer-events: all;
}
.menu-container.open .menu-bg {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}
.menu-container.open {
  transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  will-change: transform;
}
</style>